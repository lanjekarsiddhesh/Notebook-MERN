import React, { useContext, useEffect} from "react";
import "../App.css";
import noteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";
import Alert from "./Alert";
import { useLocation, useNavigate } from "react-router-dom";


export default function MyNotes() {
  const context = useContext(noteContext)
  const {notes, FetchNotes, showAlert, alert} = context
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(localStorage.getItem("auth-token")){
      FetchNotes()
    }else{
      navigate("/")
    }
    // eslint-disable-next-line
  },[])


  return (
    <>

    {alert.type !== "danger" && <Alert showAlert={showAlert} />}
    <div className=" row row-cols-1 justify-content-center">

      {notes.map((note)=>{
        return <NotesItem key={note.slug} note={note}/>
      })}
      
    </div>
  </>
  );
}
