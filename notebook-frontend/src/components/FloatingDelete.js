import React, { useContext, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext";


export default function FloatingDelete(props) {
  const context = useContext(noteContext)
  const {deleteNotes} = context
    const {Item} = props
    var ID 
    const [id,setID] = useState(ID)
    const CloseModel = useRef(null)


  

    const ConfirmDeleteNote = (e) => {
      if (e.target.value === Item._id){
      }
      setID(e.target.value)
    }

    const DeleteNote = (e) =>{
      e.preventDefault();
      if (id === Item._id){
        deleteNotes(Item._id)
        CloseModel.current.click()
      }else{
        console.log("ID doesn't match")
      }
      
    }
  return (
<>
     <div tabIndex="-1" aria-labelledby={`#${Item.title.replace(/\s/g, "")}`} aria-hidden="true" className="modal" id={`${Item.title.replace(/\s/g, "")}`} >
  <div className="modal-dialog">
    <form>
    <div className="modal-content flotingNote">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="BackdropLabel">{Item._id}</h1>
      </div>
      <div className="modal-body">
      <input className='Delete_input modal-title fs-6' placeholder={`Enter Above ID to Confirmation ${Item._id}`} onChange={ConfirmDeleteNote} type='text'/>
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
