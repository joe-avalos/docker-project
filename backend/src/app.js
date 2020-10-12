import express from 'express'
import cors from 'cors'

const PORT = 3001
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
}

// app.use(cors(corsOptions))

app.get('/test', cors(corsOptions), (req, res, next) => {
  res.send('Hello from express')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})