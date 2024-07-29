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
      className="modal fade"
      id="AddnoteBackdrop"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="#AddnoteBackdrop"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content Note_card m-5">
          <form>
            <div className="Note_top">
              <p id="title2">Your note</p>
              <div className="note_title">
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

            <div className="Note_code-container">
              <textarea
                className="area"
                id="description"
                name="description"
                onChange={onChange}
                placeholder="Write your notes here"
              />

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
          </form>
        </div>
      </div>
    </div>
  );
}
