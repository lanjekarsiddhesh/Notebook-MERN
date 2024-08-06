import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

export default function Note() {
  const context = useContext(noteContext);
  const { addNotes, showAlert } = context;
  const history = useNavigate()

  const alpha = "QWERTYUIOPasdfghjklZXCVBNMqwertyuiopASDFGHJKLzxcvbnm"
  let newalpha = ""
  const [newslug, Setnewslug] = useState(newalpha);
  function CreateSlug(title){
      for (let i = 0; i < 10; i++) {
        newalpha += title+alpha[Math.floor(Math.random() * alpha.length)]
          }
          Setnewslug(newalpha.slice(0,40))
      }

  const [notes, Setnotes] = useState({ title: "", description: "", slug: newslug });
  const onChange = (e) => {
    if(e.target.name === "title"){
      newalpha += e.target.value
      CreateSlug(newalpha)
    }
    Setnotes({ ...notes, [e.target.name]: e.target.value, slug: newslug});
    
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    addNotes(notes.title, notes.description, notes.slug);
    document.getElementById("Noteform").reset();
    showAlert("Note created successfully", "success");
    history("/Notes");
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
        <form id="Noteform">
          <div className="modal-content Note_card m-5">
            <Alert showAlert={showAlert} />
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
