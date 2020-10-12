import Note from '../models/notes.model.js'
import mongoose from 'mongoose'

const findAllNotes = async (req, res) => {
  let data
  try {
    data = await Note.find()
  } catch (e) {
    console.error(e)
    res
      .status(500)
      .send({
        message: 'Something went wrong',
        success: false,
      })
  }
  res.send({
    data,
    success: true,
  })
}

const findNoteById = async (req, res) => {
  let data
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)
      .send({
        message: 'Invalid request',
        success: false,
      })
  }
  try {
    data = await Note.findById(id)
  } catch (e) {
    console.error(e)
    res
      .status(500)
      .send({
        message: 'Something went wrong',
        success: false,
      })
  }
  res.send({
    data,
    success: true,
  })
}

const createNote = async (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .send({
        message: 'Note cannot be empty',
        success: false,
      })
  }
  const note = new Note({
    title: req.body.title,
    description: req.body.description,
  })
  
  let data
  try {
    data = await note.save()
  } catch (e) {
    console.error(e)
    res
      .status(500)
      .send({
        message: 'Something went wrong',
        success: false,
      })
  }
  res
    .status(201)
    .send({
      message: ' Note created.',
      success: true,
      data,
    })
}

const updateNoteById = async (req, res) => {
  let data
  const {id} = req.params
  if (!req.body || !mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)
      .send({
        message: 'Invalid request',
        success: false,
      })
  }
  try {
    data = await Note.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      })
  } catch (e) {
    console.error(e)
    res
      .status(500)
      .send({
        message: 'Something went wrong',
        success: false,
      })
  }
  res.send({
    data,
    success: true,
  })
}

const deleteNoteById = async (req, res) => {
  let data
  const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400)
      .send({
        message: 'Invalid request',
        success: false,
      })
  }
  try {
    data = await Note.deleteOne({_id: id})
  } catch (e) {
    console.error(e)
    res
      .status(500)
      .send({
        message: 'Something went wrong',
        success: false,
      })
  }
  res.send({
    data,
    success: true,
  })
}

export {
  findAllNotes,
  findNoteById,
  createNote,
  updateNoteById,
  deleteNoteById,
}
