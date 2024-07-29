import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) =>{
    const notes_lst = [
        {
          "_id": "669d6a973fad7af069d00457",
          "user": "669aa45822638a17d7de1196",
          "title": "React",
          "description": "Hello this is react notes.",
          "date": "2024-07-21T20:07:51.453Z",
          "__v": 0
        },
        {
          "_id": "669d6bbcd5b1990f25cbf0b7",
          "user": "669aa45822638a17d7de1196",
          "title": "javascript",
          "description": "Hello this is javascript notes.\ncreate your cheat.",
          "date": "2024-07-21T20:12:44.786Z",
          "__v": 0
        },
        {
          "_id": "669d6a973fad7af069d00457",
          "user": "669aa45822638a17d7de1196",
          "title": "React jaascript",
          "description": "Hello this is react notes; also javascript notes.create your cheat.",
          "date": "2024-07-21T20:07:51.453Z",
          "__v": 0
        },
        {
          "_id": "669d6bbcd5b1990f25cbf0b7",
          "user": "669aa45822638a17d7de1196",
          "title": "context  snippest",
          "description": "<noteContext.Provider value={{notes,Setnotes}}>\n{props.children}\n</noteContext.Provider>",
          "date": "2024-07-21T20:12:44.786Z",
          "__v": 0
        },
      ]

      const [notes, Setnotes] = useState(notes_lst)

      //Add notes
      const addNotes = (title, description) => {
        const newNote = {
          "_id": "669d6bbcd5b1990f25cbf0b7",
          "user": "669aa45822638a17d7de1196",
          "title":title,
          "description": description,
          "date": "2024-07-21T20:12:44.786Z",
          "__v": 0
        }
        Setnotes(notes.concat(newNote))
      }

      //Edit notes
      const editNotes = (updatedNote) => {
      }

      //Delete notes
      const deleteNotes = (id) => {
      }

    return (
        <noteContext.Provider value={{notes,Setnotes,addNotes,editNotes,deleteNotes}}>
            {props.children}
        </noteContext.Provider>
    )

}

export default NoteState;