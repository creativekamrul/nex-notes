import React, {useState} from "react";

const AddNote = ({addNote}) => {
    const [noteText, setNoteText] = useState("")
    const cherecterLimit = 200;
    const textChangeHandler = (e) => {
        if (cherecterLimit-e.target.value.length>=0){
            setNoteText(e.target.value)
        }

    }
    const noteSaveHandler = () => {
        if (noteText.trim().length>0){
            addNote(noteText);
            setNoteText("")
        }
    }
    return(
        <div className="note new">
            <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note"
            onChange={textChangeHandler}
            value={noteText}
            />
            <div className="note-footer">
                <small>{cherecterLimit-noteText.length} Remaining</small>
                <button onClick={noteSaveHandler} className="save">Save</button>
            </div>
        </div>
    )
}
export default AddNote