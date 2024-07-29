import React, { useContext } from "react";
import "../App.css";
import noteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";

import FloatingNote from "./FloatingNote";
import FloatingDelete from "./FloatingDelete";
export default function Home() {
  const context = useContext(noteContext)
  const {notes, Setnotes} = context
  return (
    <>
    <div className="row row-cols-1 justify-content-center">


      {notes.map((note)=>{
        return (
          <>
        <NotesItem note={note}/>
          <FloatingNote NoteTitle={note.title} NoteDescription={note.description}/>
          <FloatingDelete Item={note.title}/>
          </>
        )
      })}

    </div>
  </>
  );
}
