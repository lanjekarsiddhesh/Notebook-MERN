import React from 'react'

export default function FloatingDelete(props) {
    const {Item} = props
  return (
    <div className="modal fade" id="DeleteBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="#DeleteBackdrop" aria-hidden="true">
  <div className="modal-dialog">
    <form>
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">{Item}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input className='Delete_input modal-title fs-5' placeholder='write above note ID to confirmation' type='text'/>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn_note">Delete</button>
      </div>
    </div>
    </form>
  </div>
</div>

  )
}
