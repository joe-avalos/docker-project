import React, {useEffect, useState} from 'react'

import './App.scss'
import M from 'materialize-css'

import Navbar from './components/Navbar'
import Notes from './components/Notes'
import ModalNotes from './components/ModalNotes'
import StateContext from './StateContext'
import axios from 'axios'

function App() {
  
  const BASE_URL = process.env.REACT_APP_ENV_URL || 'localhost'
  const API_PORT = process.env.REACT_APP_API_PORT || '8080'
  const API_URL = process.env.REACT_APP_API_URL || 'api'
  const API_BASE_ADDR = `http://${BASE_URL}:${API_PORT}/${API_URL}`
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editId, setEditId] = useState('')
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    M.AutoInit()
    const fetchNotes = async () => {
      const {data} = await axios.get(`${API_BASE_ADDR}/notes`)
      setNotes(data.data)
    }
    fetchNotes()
    return () => {
    }
  }, [API_BASE_ADDR])
  
  const handleEdit = async id => {
    const {data} = await axios.patch(`${API_BASE_ADDR}/notes/${id}`, {
      title,
      description,
    })
    const newNotes = [...notes]
    newNotes.forEach(note => {
      if (note._id === id) {
        Object.assign(note, data.data)
      }
    })
    setNotes(newNotes)
    setEditId('')
    setDescription('')
    setTitle('')
  }
  
  const triggerEdit = async id => {
    setEditId(id)
    const {data} = await axios.get(`${API_BASE_ADDR}/notes/${id}`)
    setTitle(data.data.title)
    setDescription(data.data.description)
  }
  
  const handleAdd = async () => {
    const {data} = await axios.post(`${API_BASE_ADDR}/notes`,
      {
        title,
        description,
      })
    setNotes(notes.concat(data.data))
  }
  
  const handleDelete = async id => {
    await axios.delete(`${API_BASE_ADDR}/notes/${id}`)
    const newNotes = notes.filter(note => note._id !== id)
    setNotes(newNotes)
  }
  
  return (
    <StateContext.Provider value={{
      title,
      description,
      setTitle,
      setDescription,
      editId,
      setEditId,
    }}>
      <div className="App">
        <Navbar/>
        <Notes notes={notes} handleDelete={handleDelete} triggerEdit={triggerEdit}/>
        <div className="fixed-action-btn">
          <a href="#modal-add-note" className="btn-floating btn-large waves-effect waves-light red modal-trigger">
            <i className="material-icons">add</i>
          </a>
        </div>
        <ModalNotes handleAdd={handleAdd} handleEdit={handleEdit}/>
      </div>
    </StateContext.Provider>
  )
}

export default App;
