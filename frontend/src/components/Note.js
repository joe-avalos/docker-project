import React from 'react'

const Note = ({note, handleDelete, handleEdit}) => {
  return <div className="col s12 m6 l4">
    <div className="card">
      <div className="card-stacked">
        <div className="card-content">
          <span className="card-title">
            {note.title}
          </span>
          <p>
            {note.description}
          </p>
        </div>
        <div className="card-actions" style={{display: 'flex', justifyContent: 'space-around', paddingBottom: 15}}>
          <a href="#!" onClick={() => handleEdit(note._id)} className="waves-effect btn green lighten-3">
            Edit
          </a>
          <a href="#!" onClick={() => handleDelete(note._id)} className="waves-effect btn red lighten-3">
            Delete
          </a>
        </div>
      </div>
    </div>
  </div>
}

export default Note
