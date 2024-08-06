import { useState } from "react";
import noteContext from "./noteContext";
const currentDateTime = new Date();

const NoteState = (props) => {
  const host = "http://127.0.0.1:8000";
  const notes_lst = [];

  const [notes, Setnotes] = useState(notes_lst);
  const [alert, Setalert] = useState({ message: "", type: "" });

  //Alert
  const showAlert = (message, type) => {
    Setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      Setalert({ message: "", type: "" });
    }, 3000);
  };

  //Fetch notes
  const FetchNotes = async () => {
    try {
      const response = await fetch(`${host}/api/v1/notes/show-notes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": 
            localStorage.getItem("auth-token"),
        },
      });
      const Notes = await response.json();
      Setnotes(Notes);
    } catch (error) {
      console.error(error);
    }
  };

  //Add notes
  const addNotes = async (title, description,slug) => {
    try {
      const response = await fetch(`${host}/api/v1/notes/create-notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({
          title: title,
          description: description,
          slug: slug
        }),
      });
      const Notedata = await response.json();
      console.log(Notedata);
    } catch (error) {
      console.error(error);
    }
    const date = currentDateTime.toISOString();
    const newNote = {
      slug: slug.replace(/[^a-zA-Z]/g, ''),
      title: title,
      description: description,
      date: date,
      __v: 0,
    };
    Setnotes(notes.concat(newNote));
  };

  //Edit notes
  const editNotes = async (updatedNote) => {
    try {
      const response = await fetch(
        `${host}/api/v1/notes/update-notes/${updatedNote._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              localStorage.getItem("auth-token"),
          },
          body: JSON.stringify({
            title: updatedNote.title,
            description: updatedNote.description,
          }),
        }
      );
      const EditNote = response.json();
      console.log(EditNote);
    } catch (error) {
      console.error(error);
    }

    let newnotes = JSON.parse(JSON.stringify(notes));
    const editedNote = JSON.parse(
      JSON.stringify({
        title: updatedNote.title,
        description: updatedNote.description,
      })
    );

    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id === updatedNote._id) {
        newnotes[index].title = editedNote.title;
        newnotes[index].description = editedNote.description;
        break;
      }
    }

    Setnotes(newnotes);
  };

  //Delete notes
  const deleteNotes = async (slug) => {
    try {
      const response = await fetch(`${host}/api/v1/notes/delete-notes/${slug}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem("auth-token"),
        },
      });
      const EditNote = await response.json();
      console.log(EditNote);
    } catch (error) {
      console.error(error);
    }
    const newNotes = notes.filter((note) => {
      return note.slug !== slug;
    });
    Setnotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{
        notes,
        Setnotes,
        addNotes,
        editNotes,
        deleteNotes,
        FetchNotes,
        showAlert,
        alert,
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
