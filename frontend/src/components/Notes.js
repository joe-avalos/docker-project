import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Note from './Note'

const Notes = () => {
  
  const [notes, setNotes] = useState([])
  
  const BASE_URL = process.env.REACT_APP_ENV_URL || 'localhost'
  const API_PORT = process.env.REACT_APP_API_PORT || '8080'
  const API_URL = process.env.REACT_APP_API_URL || 'api'
  const API_BASE_ADDR = `http://${BASE_URL}:${API_PORT}/${API_URL}`
  
  useEffect(()=>{
    const fetchNotes = async () => {
      const {data} = await axios.get(`${API_BASE_ADDR}/notes`)
      setNotes(data.data)
    }
    fetchNotes()
    return ()=>{}
  }, [API_BASE_ADDR])
  
  const handleEdit = id =>{
    console.log('Edit note: ', id)
  }
  
  const handleDelete = async id =>{
    console.log('Delete note: ', id)
    await axios.delete(`${API_BASE_ADDR}/notes/${id}`)
    const newNotes = notes.filter(note => note._id !== id)
    setNotes(newNotes)
  }
  
  return <section>
    <div className="container">
      <div className="row">
        {notes && notes.map(note => <Note
          key={note._id}
          note={note}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        /> )}
      </div>
    </div>
  </section>
}

export default Notes
