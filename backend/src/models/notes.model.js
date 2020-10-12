import mongoose from 'mongoose'

const NotesSchema = mongoose.Schema({
  title: {
    type: String,
    min: [3, 'Title should be longer than 3 characters'],
    max: [30, 'Title should be shorter than 30 characters.'],
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    min: [5, 'Description should be longer than 3 characters'],
    max: [50, 'Description should be shorter than 30 characters.'],
    required: [true, 'Description is required'],
  },
}, {
  timestamps: true,
})

export default mongoose.model('Note', NotesSchema)
