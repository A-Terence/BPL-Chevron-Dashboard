import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { pollOnce, startPolling } from './scripts/mix-test.js'

// https://vite.dev/config/
let pollingStarted = false

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mix-data-poller',
      configureServer(server) {
        if (!pollingStarted) {
          startPolling({ maxRuns: null })
          pollingStarted = true
        }

        server.middlewares.use('/api/refresh', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.end('Method Not Allowed')
            return
          }

          const result = await pollOnce()
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(result))
        })
      },
    },
  ],
})
