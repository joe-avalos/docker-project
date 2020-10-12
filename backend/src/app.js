import express from 'express'
import mongoose from 'mongoose'

import initRouters from './routers/index.js'

const MONGO_PORT = process.env.MONGO_PORT || 27017
const MONGO_URL = process.env.MONGO_URL
const MONGODB = `mongodb://${MONGO_URL}:${MONGO_PORT}`

mongoose.connect(
  MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const NODE_PORT = process.env.NODE_PORT || '3001'

const app = express()

initRouters(app)

app.listen(NODE_PORT, () => {
  console.log(`Listening on port ${NODE_PORT}`)
})
