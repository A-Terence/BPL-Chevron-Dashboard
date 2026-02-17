// scripts/auto-poll-chevron-data.js
// Automatically polls MiX API every 5 minutes for 30 minutes (6 runs)
// Then stops

import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const IDENTITY_URL = "https://identity.za.mixtelematics.com/core/connect/token";
const API_BASE = "https://integrate.za.mixtelematics.com/api";

const CREDENTIALS = {
  username: "technicalsupport@bestpracticesltd.com",
  password: "BPLTechnical25..",
  client_id: "integrate.za.ch",
  client_secret: "yPNIMg2B14O5di7x",
};

const CHEVRON_ORG_ID = "1631109543411613696";

// Configuration
const POLL_INTERVAL_MS = 10 * 1000; // 10 seconds
 // 5 minutes
const MAX_RUNS = 120; // Run 6 times (30 minutes total)

let runCount = 0;
let inFlight = null;
let pollingInterval = null;
let pollingMaxRuns = MAX_RUNS;

async function authenticate() {
  const params = new URLSearchParams({
    grant_type: "password",
    username: CREDENTIALS.username,
    password: CREDENTIALS.password,
    client_id: CREDENTIALS.client_id,
    client_secret: CREDENTIALS.client_secret,
    scope: "offline_access MiX.Integrate",
  });

  const response = await fetch(IDENTITY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const contentType = response.headers.get("content-type");
  
  if (!contentType || !contentType.includes("application/json")) {
    const text = await response.text();
    console.log("âŒ Authentication failed - got HTML instead of JSON");
    console.log("   Server might be down or network issue");
    throw new Error("Authentication server returned HTML, not JSON");
  }

  const data = await response.json();
  
  if (!data.access_token) {
    throw new Error("No access token in response");
  }
  
  return data.access_token;
}

async function getVehicles(token) {
  const response = await fetch(`${API_BASE}/assets/group/${CHEVRON_ORG_ID}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
    },
  });

  if (!response.ok) return [];
  return await response.json();
}

async function getActiveEvents(token) {
  let sinceToken = "NEW";
  const tokenFile = 'since-token.txt';
  
  try {
    if (fs.existsSync(tokenFile)) {
      sinceToken = fs.readFileSync(tokenFile, 'utf8').trim();
    }
  } catch (error) {
    // Use NEW
  }
  
  const endpoint = `${API_BASE}/activeevents/groups/createdsince/organisation/${CHEVRON_ORG_ID}/sincetoken/${sinceToken}/quantity/1000`;
  
  const response = await fetch(endpoint, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
    },
  });

  const nextSinceToken = response.headers.get("getsincetoken");
  
  if (nextSinceToken) {
    fs.writeFileSync(tokenFile, nextSinceToken);
  }
  
  if (response.status === 204 || !response.ok) {
    return [];
  }

  return await response.json();
}

function mergeData(vehicles, events) {
  const eventsByAsset = new Map();
  events.forEach(event => {
    const assetId = event.AssetId?.toString();
    if (assetId) {
      if (!eventsByAsset.has(assetId)) {
        eventsByAsset.set(assetId, []);
      }
      eventsByAsset.get(assetId).push(event);
    }
  });
  
  return vehicles.map(vehicle => {
    const assetId = vehicle.AssetId?.toString();
    const vehicleEvents = eventsByAsset.get(assetId) || [];
    
    const hasPanic = vehicleEvents.some(e => e.Armed === true || e.Priority > 5);
    
    const latestEvent = vehicleEvents.length > 0 
      ? vehicleEvents.sort((a, b) => new Date(b.EventDateTime) - new Date(a.EventDateTime))[0]
      : null;
    
    let status = 'Parked';
    if (latestEvent?.Position) {
      const speed = latestEvent.Position.SpeedKilometresPerHour || 0;
      if (speed > 5) status = 'Moving';
      else if (speed > 0) status = 'Idle';
    }
    
    return {
      id: assetId || 'unknown',
      regNo: vehicle.RegistrationNumber || 'N/A',
      transporter: vehicle.SiteName || 'Chevron Nigeria',
      assetName: vehicle.Description || 'Unknown Vehicle',
      make: vehicle.Make || 'N/A',
      model: vehicle.Model || 'N/A',
      status,
      date: latestEvent?.EventDateTime 
        ? new Date(latestEvent.EventDateTime).toLocaleString('en-GB')
        : new Date().toLocaleString('en-GB'),
      panic: hasPanic,
      position: latestEvent?.Position ? {
        latitude: latestEvent.Position.Latitude,
        longitude: latestEvent.Position.Longitude,
        speed: latestEvent.Position.SpeedKilometresPerHour,
        heading: latestEvent.Position.Heading,
        address: latestEvent.Position.FormattedAddress || 'Unknown'
      } : null,
      activeEvents: vehicleEvents.length,
    };
  });
}

export async function pollOnce() {
  if (inFlight) return inFlight;

  inFlight = (async () => {
    runCount++;
    
    console.log("\n" + "=".repeat(70));
    console.log(`RUN #${runCount} of ${pollingMaxRuns ?? "∞"} - ${new Date().toLocaleString('en-GB')}`);
    console.log("=".repeat(70));
    
    try {
      const token = await authenticate();
      console.log("âœ… Authenticated");
      
      const vehicles = await getVehicles(token);
      console.log(`âœ… Vehicles: ${vehicles.length}`);
      
      const events = await getActiveEvents(token);
      console.log(`âœ… Events: ${events.length}`);
      
      const merged = mergeData(vehicles, events);
      
      const stats = {
        panic: merged.filter(v => v.panic).length,
        moving: merged.filter(v => v.status === 'Moving').length,
        parked: merged.filter(v => v.status === 'Parked').length,
      };
      
      const dataPath = path.join(process.cwd(), 'public', 'data.json');
      const metadataPath = path.join(process.cwd(), 'public', 'metadata.json');
      fs.writeFileSync(dataPath, JSON.stringify(merged, null, 2));
      
      const metadata = {
        lastUpdate: new Date().toISOString(),
        runNumber: runCount,
        totalVehicles: vehicles.length,
        ...stats
      };
      fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
      
      console.log(`ðŸ“Š Panic: ${stats.panic} | Moving: ${stats.moving} | Parked: ${stats.parked}`);
      console.log("ðŸ’¾ Saved to data.json");
      
      if (stats.panic > 0) {
        console.log("\nðŸš¨ PANIC ALERT DETECTED! ðŸš¨");
        const panicVehicles = merged.filter(v => v.panic);
        panicVehicles.forEach(v => {
          console.log(`   ${v.regNo} - ${v.assetName}`);
        });
      }

      return { ok: true, stats, runCount };
    } catch (error) {
      console.error("âŒ Error:", error.message);
      return { ok: false, error: error.message ?? String(error), runCount };
    }
  })();

  try {
    return await inFlight;
  } finally {
    inFlight = null;
  }
}

export function startPolling(options = {}) {
  const { intervalMs = POLL_INTERVAL_MS, maxRuns = MAX_RUNS } = options;
  pollingMaxRuns = maxRuns ?? null;

  console.log("ðŸš€ MiX Auto-Polling Started");
  console.log("=".repeat(70));
  console.log(`Polling interval: ${intervalMs / 1000} seconds`);
  console.log(`Total runs: ${pollingMaxRuns ?? "∞"}`);
  if (pollingMaxRuns) {
    console.log(`Estimated duration: ${(pollingMaxRuns * intervalMs) / 1000}s (~${((pollingMaxRuns * intervalMs) / 60000).toFixed(1)} min)`);  
  }
  console.log("=".repeat(70));
  console.log("\nPress Ctrl+C to stop early\n");
  
  // Run immediately
  pollOnce();
  
  // Then schedule remaining runs
  if (pollingInterval) clearInterval(pollingInterval);
  pollingInterval = setInterval(async () => {
    await pollOnce();
    
    if (pollingMaxRuns && runCount >= pollingMaxRuns) {
      clearInterval(pollingInterval);
      pollingInterval = null;
    }
  }, intervalMs);
}

const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  startPolling({ intervalMs: POLL_INTERVAL_MS, maxRuns: MAX_RUNS });
}
