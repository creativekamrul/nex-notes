import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from "nanoid";
const App = () => {
    const [notes, setNotes] = useState([
        {
        id: nanoid(),
        text: 'This is the first note',
        date: '15/4/2021'
        },
        {
        id: nanoid(),
        text: 'This is the 2nd note',
        date: '15/4/2021'
        },
        {
        id: nanoid(),
        text: 'This is the 3rd note',
        date: '15/4/2021'
        },
        {
        id: nanoid(),
        text: 'This is the 4th note',
        date: '15/4/2021'
        },
    ])
    const addNote = (text) => {
       const date = new Date()
        const newNote = {
           id:nanoid(),
           text: text,
           date: date.toLocaleDateString(),

        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }
    const deleteNote = (id) => {
       const newNotes = notes.filter((note)=>note.id !== id)
        setNotes(newNotes)
    }
  return (
    <div className="container">
      <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
