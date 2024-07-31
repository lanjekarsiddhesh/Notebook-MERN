import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function Note() {
  const context = useContext(noteContext);
  const { addNotes } = context;

  const [notes, Setnotes] = useState({ title: "", description: "" });

  const onChange = (e) => {
    Setnotes({ ...notes, [e.target.name]: e.target.value });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    addNotes(notes.title, notes.description);
  };

  return (
   
    <div
      className="modal fade modal-lg"
      id="AddnoteBackdrop"
      tabIndex="-1"
      aria-labelledby="#AddnoteBackdrop"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form>
          <div className="modal-content Note_card m-5">
            <div className="modal-header">
              <div className="Note_top">
                <h5 className="note_title">Your note</h5>
                <div className="note_title_input">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="input"
                    placeholder="Enter your title!"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="Note_code-container">
                <textarea
                  className="area"
                  id="description"
                  name="description"
                  onChange={onChange}
                  placeholder="Write your notes here"
                />
              </div>
              <div className="d-grid col-6 mx-auto ">
                <button
                  className=" btn_note"
                  type="submit"
                  onClick={handleSubmitButton}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  
  );
}
