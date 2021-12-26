import {MdDeleteForever} from "react-icons/all";

const Note = ({noteData, deleteNote}) => {
    const {id, text, date} = noteData
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={()=>deleteNote(id)}/>
            </div>
        </div>
    )
}
export default Note