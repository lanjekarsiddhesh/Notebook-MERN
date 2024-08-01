import React, { useContext, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function FloatingNote(props) {
  const context = useContext(noteContext)
  const {editNotes} = context;
  const { Item } = props;
  const [notes, Editsetnote] = useState({_id:Item._id,title:"",description:"" });
  const CloseModel = useRef(null)

  const onChange = (e)=>{
    Editsetnote({ ...notes, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e)=>{
    editNotes(notes)
    CloseModel.current.click()
  }


  return (
    <div
      className="modal fade"
      id={`Update${Item.title.replace(/\s/g, "")}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby={`#Update${Item.title.replace(/\s/g, "")}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">

          <div className="modal-content flotingNote">
            <div className="modal-header">
              <input
                className="input modal-title fs-5"
                defaultValue={Item.title}
                id="title"
                name="title"
                type="text"
                onChange={onChange}
              />
              <button
                type="button"
                className="btn-close ps-4"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="code-container">
              <textarea
                className="area"
                defaultValue={Item.description}
                id="description"
                name="description"
                onChange={onChange}
              ></textarea>

              <div className="modal-footer">
                <button type="button" ref={CloseModel} data-bs-dismiss="modal" className="btn btn-secondary">
                  Close
                </button>
                <button type="button" onClick={handleSubmit} className="btn btn_note">
                  Save
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
