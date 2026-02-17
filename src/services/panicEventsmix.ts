import { 
  collection, 
  addDoc, 
  query, 
  where, 
  onSnapshot, 
  getDocs,
  setDoc,
  doc 
} from "firebase/firestore";
import { db } from "../firebaseconfig";

// ---------- MiX CONFIG ----------
// Updated with working credentials and organization ID from API test
const MIX_BASE = "https://integrate.za.mixtelematics.com";
const MIX_USERNAME = "technicalsupport@bestpracticesltd.com";
const MIX_PASSWORD = "BPLTechnical25..";
const MIX_CLIENT_ID = "integrate.za.ch";
const MIX_CLIENT_SECRET = "yPNIMg2B14O5di7x";
const CHEVRON_ORG_ID = "1631109543411613700"; // Africa - Best Practices - Chevron Nigeria Ltd

let cachedToken: string | null = null;
let tokenExpiry = 0;

// ---------- Types ----------
export interface Vehicle {
  vehicleId: string;
  registrationNumber: string;
  description: string;
  organisationId: string;
  organisationName?: string;
  installedDeviceType?: string;
  installedDeviceId?: string;
  lastPosition?: {
    latitude: number;
    longitude: number;
    heading?: number;
    speed?: number;
    timestamp?: string;
  };
  currentDriver?: {
    driverId: string;
    name: string;
  };
  raw: any;
}

export interface OrganisationGroup {
  organisationGroupId: string;
  organisationGroupName: string;
}

export interface PanicEvent {
  eventId: string;
  vehicleId: string;
  clientId: string;
  lat: number;
  lon: number;
  status: "ACTIVE" | "RESOLVED";
  timestamp: string;
  raw: any;
}

export interface PanicEventCallback {
  (event: PanicEvent): void;
}

// ---------- Get MiX Access Token ----------
async function getMixToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && tokenExpiry - 30 > now) return cachedToken;

  try {
    const params = new URLSearchParams({
      grant_type: "password",
      username: MIX_USERNAME,
      password: MIX_PASSWORD,
      client_id: MIX_CLIENT_ID,
      client_secret: MIX_CLIENT_SECRET,
      scope: "openid",
    });

    const res = await fetch(`${MIX_BASE}/connect/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    if (!res.ok) throw new Error("Authentication failed");

    const data = await res.json();
    cachedToken = data.access_token;
    tokenExpiry = Math.floor(Date.now() / 1000) + (data.expires_in || 3600);
    return cachedToken!;
  } catch (err) {
    console.error("Failed to get MiX token:", err);
    throw new Error("Authentication failed");
  }
}

// ---------- Get All Organisation Groups ----------
export async function getOrganisationGroups(): Promise<OrganisationGroup[]> {
  try {
    const token = await getMixToken();
    const res = await fetch(`${MIX_BASE}/api/organisationgroups`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Failed to fetch organisation groups");

    const groups = await res.json();
    
    return groups.map((g: any) => ({
      organisationGroupId: g.OrganisationGroupId,
      organisationGroupName: g.OrganisationGroupName,
    }));
  } catch (err) {
    console.error("Error fetching organisation groups:", err);
    throw err;
  }
}

// ---------- Find Organisation ID by Name ----------
export async function findOrganisationIdByName(
  searchName: string
): Promise<string | null> {
  try {
    const groups = await getOrganisationGroups();
    
    // Search for partial match (case-insensitive)
    const match = groups.find((g) =>
      g.organisationGroupName.toLowerCase().includes(searchName.toLowerCase())
    );

    if (match) {
      console.log(`Found organisation: ${match.organisationGroupName} (ID: ${match.organisationGroupId})`);
      return match.organisationGroupId;
    }

    console.log("Available organisations:", groups);
    return null;
  } catch (err) {
    console.error("Error finding organisation:", err);
    return null;
  }
}

// ---------- Get All Assets/Vehicles for Organisation ----------
export async function getVehiclesForOrganisation(
  organisationId: string
): Promise<Vehicle[]> {
  try {
    const token = await getMixToken();
    const res = await fetch(
      `${MIX_BASE}/api/Assets?organisationGroupId=${organisationId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch vehicles");

    const assets = await res.json();

    return assets.map((asset: any) => ({
      vehicleId: asset.AssetId || asset.VehicleId,
      registrationNumber: asset.RegistrationNumber || "Unknown",
      description: asset.Description || asset.RegistrationNumber || "Unknown Vehicle",
      organisationId: asset.OrganisationGroupId || organisationId,
      installedDeviceType: asset.InstalledDeviceType,
      installedDeviceId: asset.InstalledDeviceId,
      lastPosition: asset.LatestPosition
        ? {
            latitude: asset.LatestPosition.Latitude,
            longitude: asset.LatestPosition.Longitude,
            heading: asset.LatestPosition.Heading,
            speed: asset.LatestPosition.Speed,
            timestamp: asset.LatestPosition.Timestamp,
          }
        : undefined,
      currentDriver: asset.Driver
        ? {
            driverId: asset.Driver.DriverId,
            name: asset.Driver.Name || "Unknown Driver",
          }
        : undefined,
      raw: asset,
    }));
  } catch (err) {
    console.error("Error fetching vehicles:", err);
    throw err;
  }
}

// ---------- Save Vehicles to Firestore ----------
export async function saveVehiclesToFirestore(
  vehicles: Vehicle[],
  organisationName?: string
): Promise<number> {
  let savedCount = 0;

  try {
    for (const vehicle of vehicles) {
      // Use vehicleId as document ID to prevent duplicates
      await setDoc(doc(db, "vehicles", vehicle.vehicleId), {
        vehicleId: vehicle.vehicleId,
        registrationNumber: vehicle.registrationNumber,
        description: vehicle.description,
        organisationId: vehicle.organisationId,
        organisationName: organisationName || "Unknown",
        installedDeviceType: vehicle.installedDeviceType,
        installedDeviceId: vehicle.installedDeviceId,
        lastPosition: vehicle.lastPosition,
        currentDriver: vehicle.currentDriver,
        lastUpdated: new Date().toISOString(),
        raw: vehicle.raw,
      });
      savedCount++;
    }

    console.log(`Saved ${savedCount} vehicles to Firestore`);
    return savedCount;
  } catch (err) {
    console.error("Error saving vehicles:", err);
    throw err;
  }
}

// ---------- Initialize Vehicle Database for Organisation ----------
export async function initializeVehicleDatabase(
  searchName: string
): Promise<{ organisationId: string; vehicleCount: number }> {
  try {
    console.log(`Searching for organisation: ${searchName}`);
    
    // Step 1: Find the organisation ID
    const organisationId = await findOrganisationIdByName(searchName);
    
    if (!organisationId) {
      throw new Error(`Organisation not found: ${searchName}`);
    }

    console.log(`Fetching vehicles for organisation ID: ${organisationId}`);
    
    // Step 2: Fetch all vehicles
    const vehicles = await getVehiclesForOrganisation(organisationId);
    
    console.log(`Found ${vehicles.length} vehicles`);
    
    // Step 3: Save to Firestore
    const savedCount = await saveVehiclesToFirestore(vehicles, searchName);

    return {
      organisationId,
      vehicleCount: savedCount,
    };
  } catch (err) {
    console.error("Error initializing vehicle database:", err);
    throw err;
  }
}

// ---------- Check if Event Exists ----------
async function eventExists(eventId: string): Promise<boolean> {
  const q = query(
    collection(db, "panicEvents"),
    where("eventId", "==", eventId)
  );
  const snapshot = await getDocs(q);
  return !snapshot.empty;
}

// ---------- Fetch & Save Panic Events to Firestore ----------
export async function fetchAndSavePanicEvents(clientId: string): Promise<number> {
  try {
    const token = await getMixToken();
    const res = await fetch(`${MIX_BASE}/api/ActiveEvents?eventType=Panic`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Failed to fetch panic events");

    const events = await res.json();
    let savedCount = 0;

    for (const ev of events || []) {
      // Filter by client organization
      if (ev.OrganisationGroupId !== clientId) continue;

      const eventId = ev.EventId || `${ev.VehicleId}_${ev.Timestamp}`;
      
      // Prevent duplicates
      if (await eventExists(eventId)) continue;

      await addDoc(collection(db, "panicEvents"), {
        eventId,
        vehicleId: ev.VehicleId || ev.AssetId || "Unknown",
        clientId: ev.OrganisationGroupId,
        lat: ev.Latitude || 0,
        lon: ev.Longitude || 0,
        status: ev.Status || "ACTIVE",
        timestamp: ev.Timestamp || new Date().toISOString(),
        raw: ev,
      });

      savedCount++;
    }

    return savedCount;
  } catch (err) {
    console.error("Error fetching or saving panic events:", err);
    throw err;
  }
}

// ---------- Listen to Panic Events in Real-Time ----------
export function listenToPanicEvents(
  clientId: string,
  callback: PanicEventCallback
): () => void {
  const q = query(
    collection(db, "panicEvents"),
    where("clientId", "==", clientId)
  );

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const data = change.doc.data() as PanicEvent;
          callback(data);
        }
      });
    },
    (error) => {
      console.error("Error listening to panic events:", error);
    }
  );

  return unsubscribe;
}

// ---------- Fetch All Events for Client ----------
export async function getAllPanicEvents(clientId: string): Promise<PanicEvent[]> {
  try {
    const q = query(
      collection(db, "panicEvents"),
      where("clientId", "==", clientId)
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => doc.data() as PanicEvent);
  } catch (err) {
    console.error("Error fetching panic events:", err);
    return [];
  }
}

// ---------- Get All Vehicles from Firestore ----------
export async function getAllVehicles(organisationId?: string): Promise<Vehicle[]> {
  try {
    let q;
    
    if (organisationId) {
      q = query(
        collection(db, "vehicles"),
        where("organisationId", "==", organisationId)
      );
    } else {
      q = query(collection(db, "vehicles"));
    }
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as Vehicle);
  } catch (err) {
    console.error("Error fetching vehicles:", err);
    return [];
  }
}