import mongoose from 'mongoose'

const testResponse = (req, res, next) => {
  res.send('Hello from express train to Hiroshima')
}

const healthCheckResponse = (req, res, next) => {
  mongoose.connection.db.admin().ping((error, result) => {
    if (error || !result) {
      res.send({
        message: `Ping fail with error: ${error}`,
        status: 'fail',
      })
    }
    res.send({
      message: `Connection with mongo is up: ${result}`,
      status: 'success',
    })
  })
}

export {
  testResponse,
  healthCheckResponse,
}
