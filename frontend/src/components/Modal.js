import React, {useEffect, useRef} from 'react'
import M from 'materialize-css'

const Modal = ({children}) => {
  const _noteModal = useRef(null)
  
  useEffect(() => {
    M.Modal.init(_noteModal.current)
    return () => {
    }
  }, [])
  return <div id="modal-add-note" className="modal" ref={_noteModal}>
    {children}
  </div>
}

export default Modal
