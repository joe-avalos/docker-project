import express from 'express'
import {testResponse, healthCheckResponse} from '../controllers/health.controller.js'

const router = express.Router()

router.get('/test', /*cors(corsOptions),*/ testResponse)

router.get('/healthcheck', healthCheckResponse)

export default router
