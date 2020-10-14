import React from 'react'
import Note from './Note'

const Notes = ({notes, handleDelete, triggerEdit}) => {
  
  return <section>
    <div className="container">
      <div className="row">
        {notes && notes.map(note => <Note
          key={note._id}
          note={note}
          handleDelete={handleDelete}
          triggerEdit={triggerEdit}
        /> )}
      </div>
    </div>
  </section>
}

export default Notes
