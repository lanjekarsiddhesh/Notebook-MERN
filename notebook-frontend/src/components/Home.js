import React, { useContext, useEffect } from "react";
import "../App.css";
import noteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";


export default function Home() {
  const context = useContext(noteContext)
  const {notes, FetchNotes} = context
  useEffect(()=>{
    FetchNotes()
  },[])
  return (
    <>
    <div className=" row row-cols-1 justify-content-center">

      
      {notes.map((note)=>{
        return <NotesItem key={note._id} note={note}/> 
      })}
      
      

    </div>
  </>
  );
}
