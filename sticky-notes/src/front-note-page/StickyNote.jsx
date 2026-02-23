import stickyNote from "../assets/sticky-note.webp";
import './StickyNote.css'
export function StickyNote({note, setShowNote}) {
    return (
        <div className="container">
            <img src={stickyNote} />
            <h2 className="overlay-title">{note.title}</h2>
            <button className="close-button" onClick={() => {
                setShowNote(false)
            }}>X</button>
            <p className="overlay-text">
                {note.information ? note.information : 'Please give note info'}
            </p>
        </div>
    )
}