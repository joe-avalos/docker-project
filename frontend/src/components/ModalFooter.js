import React, {useContext, useEffect, useState} from 'react'
import StateContext from '../StateContext'

const ModalFooter = () => {
  const {title, description} = useContext(StateContext)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  
  const isLengthValid = () => (
    title.length >= 3
    && title.length <= 30
    && description.length >= 5
    && description.length <= 50
  )
  
  useEffect(() => {
    setIsBtnDisabled(!isLengthValid())
    return () => {
    
    }
  }, [title, description])
  
  return <div className="modal-footer">
    <a href="#!" className="modal-action modal-close waves-effect btn-flat red white-text"
       style={{marginRight: 10}}>
      Cancel
    </a>
    <a
      href="#!"
      className={`${isBtnDisabled ? 'disabled' : ''} modal-action modal-close waves-effect btn-flat green white-text`}
    >
      Ok
    </a>
  </div>
}

export default ModalFooter
