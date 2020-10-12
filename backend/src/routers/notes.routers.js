import express from 'express'

const router = express.Router()

router.get('/notes', (req, res, next) => {
  res.send('Hello from notes')
})
router.get('/notes/:id', (req, res, next) => {
  res.send(`You requested note ${req.params.id}`)
})
router.post('/notes', (req, res, next) => {

})
router.delete('/notes/:id', (req, res, next) => {

})
router.patch('/notes/:id', (req, res, next) => {

})

export default router
