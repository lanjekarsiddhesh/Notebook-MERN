import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) =>{
  const host = 'http://127.0.0.1:8000'
  const notes_lst = []

      const [notes, Setnotes] = useState(notes_lst)

      //Fetch notes
      const FetchNotes = async ()=> {
        try {
          const response = await fetch(`${host}/api/v1/notes/show-notes`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5YWE0NTgyMjYzOGExN2Q3ZGUxMTk2In0sImlhdCI6MTcyMTU5MDY2Nn0.NPEWE-pOsS6rNzFTfBfCCvm1_dWDg-0zhdGgEIg5lAk'
            }
          })
          const Notes = await response.json()
          Setnotes(Notes)
          
        } catch (error) {
          console.error(error)
          
        }
      }

      //Add notes
      const addNotes = async (title, description) => {

        try {
          const response = await fetch(`${host}/api/v1/notes/create-notes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5YWE0NTgyMjYzOGExN2Q3ZGUxMTk2In0sImlhdCI6MTcyMTU5MDY2Nn0.NPEWE-pOsS6rNzFTfBfCCvm1_dWDg-0zhdGgEIg5lAk'
            },
            body: JSON.stringify({
              "title":title,
              "description":description
            }),
          }) 
          const Notedata = response.json()
          console.log(Notedata)
          
        } catch (error) {
          console.error(error)
          
        }


        const newNote = {
          "_id": "669d6bbcd5b1990f25cbf0b8",
          "user": "669aa45822638a17d7de1196",
          "title":title,
          "description": description,
          "date": "2024-07-21T20:12:44.786Z",
          "__v": 0
        }
        Setnotes(notes.concat(newNote))
      }

      //Edit notes
      const editNotes = async (updatedNote) => {
        try {
          const response = await fetch(`${host}/api/v1/notes/update-notes/${updatedNote._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5YWE0NTgyMjYzOGExN2Q3ZGUxMTk2In0sImlhdCI6MTcyMTU5MDY2Nn0.NPEWE-pOsS6rNzFTfBfCCvm1_dWDg-0zhdGgEIg5lAk'
            },
            body: JSON.stringify({"title":updatedNote.title,
              "description":updatedNote.description})
          }) 
          const EditNote = response.json()
          console.log(EditNote)
          
        } catch (error) {
          console.error(error)
          
        }
      }

      //Delete notes
      const deleteNotes = async (id) => {
        try {
          const response = await fetch(`${host}/api/v1/notes/delete-notes/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5YWE0NTgyMjYzOGExN2Q3ZGUxMTk2In0sImlhdCI6MTcyMTU5MDY2Nn0.NPEWE-pOsS6rNzFTfBfCCvm1_dWDg-0zhdGgEIg5lAk'
            }
          })
          const EditNote = response.json()
          console.log(EditNote) 
          
        } catch (error) {
          console.error(error)
          
        }
        const newNotes = notes.filter((note)=>{return note._id!==id})
        Setnotes(newNotes)
      }

    return (
        <noteContext.Provider value={{notes,Setnotes,addNotes,editNotes,deleteNotes,FetchNotes}}>
            {props.children}
        </noteContext.Provider>
    )

}

export default NoteState;