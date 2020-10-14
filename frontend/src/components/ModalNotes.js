import React from 'react'
import Modal from './Modal'
import NotesForm from './NotesForm'
import ModalFooter from './ModalFooter'
import ModalContent from './ModalContent'

const ModalNotes = ({handleAdd, handleEdit}) => {
  return <Modal>
    <ModalContent>
      <NotesForm/>
    </ModalContent>
    <ModalFooter handleAdd={handleAdd} handleEdit={handleEdit}/>
  </Modal>
}

export default ModalNotes
