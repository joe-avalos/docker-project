import React, {useContext, useEffect, useRef} from 'react'
import M from 'materialize-css'
import StateContext from '../StateContext'

const NotesForm = () => {
  const _titleInput = useRef(null)
  const _descriptionInput = useRef(null)
  
  const {title, description, setTitle, setDescription, editId} = useContext(StateContext)
  
  useEffect(() => {
    M.CharacterCounter.init(_titleInput.current)
    M.CharacterCounter.init(_descriptionInput.current)
    return () => {
    }
  }, [])
  return <>
    <h4>
    {
      editId === '' ? 'Create a new note'
      : 'Edit note'
    }
    </h4>
    <div className="row">
      <form action="" className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              type="text"
              id="input_text"
              data-length="30"
              ref={_titleInput}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="input_text" className="active">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
                  <textarea
                    id="textarea"
                    className="materialize-textarea active"
                    data-length="50"
                    ref={_descriptionInput}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
            <label htmlFor="textarea" className="active">Description</label>
          </div>
        </div>
      </form>
    </div>
  </>
}

export default NotesForm
