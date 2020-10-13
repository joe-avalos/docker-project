import React from 'react'
import Modal from './Modal'
import NotesForm from './NotesForm'
import ModalFooter from './ModalFooter'
import ModalContent from './ModalContent'

const ModalNotes = () => {
  return <Modal>
    <ModalContent>
      <NotesForm/>
    </ModalContent>
    <ModalFooter/>
  </Modal>
}

export default ModalNotes
