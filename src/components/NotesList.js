import Note from "./Note";
import React from "react";
import AddNote from "./AddNote";

const NotesList = ({notes, addNote, deleteNote}) => {
    return(
        <div className="notes-list" >
            {
                notes.map((note)=>{
                    return <Note key={note.id} deleteNote={deleteNote} noteData={note}/>
                })
            }
            <AddNote addNote={addNote} />
        </div>
    )
}
export default NotesList