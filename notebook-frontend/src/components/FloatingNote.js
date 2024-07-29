import React from 'react'

export default function FloatingNote(props) {
  const {NoteTitle, NoteDescription} = props
  return (
    <div className="modal fade" id="Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <form>
      <div className="modal-content">
        <div className="modal-header">
        <input className='input modal-title fs-5' value={NoteTitle} type='text'/>
          <button type="button" className="btn-close ps-4" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      
        <div className="code-container">
          <textarea className="area" value={NoteDescription} name="code">
            
          </textarea>

          <div className="modal-footer">
        <button type="button" className="btn btn_note">Save</button>
      </div>
          
      </div>
        
      </div>
      </form>
    </div>
  </div>
  )

}