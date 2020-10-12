import cors from 'cors'

import healthCheck from './health.routers.js'
import notesRouter from './notes.routers.js'

const REACT_URL = process.env.REACT_URL || 'localhost'
const REACT_PORT = process.env.REACT_PORT || '3000'
const BASE_REACT_URL = `http://${REACT_URL}:${REACT_PORT}`
console.log(`CORS set to address: ${BASE_REACT_URL}`)

const corsOptions = {
  origin: BASE_REACT_URL,
}

function initRouters(app) {
  app.use(cors(corsOptions))
  app.use(healthCheck)
  app.use(notesRouter)
}

export default initRouters
