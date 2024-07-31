import React from "react";
import FloatingDelete from "./FloatingDelete";
import FloatingNote from "./FloatingNote";

export default function NotesItem(props) {
    const {note} = props;
    const onChange = ()=>{}
  return (
<>
    <div className="card m-5 col">
        <div className="header">
          <div className="top">
            <div className="circle">
              <span className="black circle2"></span>
            </div>
            <div className="circle">
              <span className="yellow circle2"></span>
            </div>
            <div className="circle">
              <span className="green circle2"></span>
            </div>
            <div className="title">
              <p id="title2">{note.title}</p>
            </div>
          </div>
        </div>
        <div className="code-container">
          <textarea className="area" value={note.description} onChange={onChange} id="code" name="code" readOnly=""></textarea>
           
        
          <div className="footer d-flex justify-content-between">
              <p id="Footertitle">{note.date}</p>
              <div>
              <i className="fa-solid pencil fa-pen-to-square" data-bs-toggle="modal" data-bs-target={`#Update${note.title.replace(/\s/g, "")}`} ></i>
              <i className="fa-solid trash fa-trash" data-bs-toggle="modal" data-bs-target={`#${note.title.replace(/\s/g, "")}`}></i>
              </div>
              
        </div>
        </div>
        
      </div>
      <FloatingDelete Item={note} />
      <FloatingNote Item={note}/>
      </>
      
   
     
  )
}
