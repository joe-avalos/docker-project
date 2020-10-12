import express from 'express'
import {
  findAllNotes,
  findNoteById,
  createNote,
  updateNoteById,
  deleteNoteById,
} from '../controllers/notes.controller.js'

const router = express.Router()

router.get('/notes', findAllNotes)
router.get('/notes/:id', findNoteById)
router.post('/notes', createNote)
router.delete('/notes/:id', deleteNoteById)
router.patch('/notes/:id', updateNoteById)

export default router
