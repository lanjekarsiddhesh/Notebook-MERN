import React, { useContext, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext";
import Alert from './Alert';


export default function FloatingDelete(props) {
  const context = useContext(noteContext)
  const {deleteNotes,showAlert} = context
    const {Item} = props
    var ID 
    const [slug,setslug] = useState(ID)
    const CloseModel = useRef(null)

    const ConfirmDeleteNote = (e) => {
      if (e.target.value === Item.slug){
      }
      setslug(e.target.value)
    }

    const DeleteNote = (e) =>{
      e.preventDefault();
      if (slug === Item.slug){
        deleteNotes(Item.slug)
        CloseModel.current.click()
        showAlert(`${Item.title} note is successfully deleted.`,'success')
      }else{
        showAlert("May be you enter wrong confirmation ID","danger")
      }
      
    }
  return (
<>
     <div tabIndex="-1" aria-labelledby={`#${Item.slug}`} data-bs-backdrop="static" aria-hidden="true" className="modal" id={`${Item.slug}`} >
  <div className="modal-dialog">
    <form>
    <div className="modal-content flotingNote">
    <Alert showAlert={showAlert} />
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="BackdropLabel">{Item.slug}</h1>
      </div>
      <div className="modal-body">
      <input className='Delete_input modal-title fs-6' placeholder={`Enter Above ID to Confirmation ${Item.slug}`} onChange={ConfirmDeleteNote} type='text'/>
      </div>
      <div className="modal-footer">
        <button type="button" ref={CloseModel} data-bs-dismiss="modal" className="btn btn-secondary" >Close</button>
        <button type="submit" className="btn btn_note" onClick={DeleteNote} >Delete</button>
      </div>
    </div>
    </form>
  </div>
</div>
</>

  )
}
