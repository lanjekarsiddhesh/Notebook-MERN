import React, { useContext, useEffect} from "react";
import "../App.css";
import noteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";
import Alert from "./Alert";
import { useLocation, useNavigate } from "react-router-dom";


export default function Home() {
  // const context = useContext(noteContext)
  // const {notes, FetchNotes, showAlert, alert} = context
  // const navigate = useNavigate()
  
  // useEffect(()=>{
  //   if(localStorage.getItem("auth-token")){
  //     FetchNotes()
  //   }else{
  //     navigate("/Notes")
  //   }
    
  //   // eslint-disable-next-line
  // },[])


  return (
    <>
    <h1>hello</h1>

    {/* {alert.type !== "danger" && <Alert showAlert={showAlert} />}
    <div className=" row row-cols-1 justify-content-center">

      {notes.map((note)=>{
        return <NotesItem key={note._id} note={note}/>
      })}
      
      

    </div> */}
  </>
  );
}
