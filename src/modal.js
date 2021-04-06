import React from 'react'

const Modal=({modalContent, closeModal})=>{
    setTimeout(()=>{
      closeModal()
    },3000)
  return(
    <div style={{color:'red', marginTop:'5px'}}>{modalContent}</div>
  )
}
export default Modal