import React, {useContext, useEffect, useState} from 'react'
import StateContext from '../StateContext'

const ModalFooter = ({handleAdd, handleEdit}) => {
  const {title, setTitle, description, setDescription, editId, setEditId} = useContext(StateContext)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  
  
  useEffect(() => {
    const isLengthValid = () => (
      title.length >= 3
      && title.length <= 30
      && description.length >= 5
      && description.length <= 50
    )
    setIsBtnDisabled(!isLengthValid())
    return () => {
    }
  }, [title, description])
  
  const handleCancel = () => {
    setTitle('')
    setDescription('')
    setEditId('')
  }
  
  return <div className="modal-footer">
    <a href="#!" className="modal-action modal-close waves-effect btn-flat red white-text"
       onClick={handleCancel}
       style={{marginRight: 10}}>
      Cancel
    </a>
    <a
      href="#!"
      className={`${isBtnDisabled ? 'disabled' : ''} modal-action modal-close waves-effect btn-flat green white-text`}
      onClick={() => {
        if (editId === ''){
          handleAdd()
        }else{
          handleEdit(editId)
        }
      }}
    >
      Ok
    </a>
  </div>
}

export default ModalFooter
