import './StickyNote.css'
export function StickyNote({ note, setShowNote }) {
    return (
        <div className="container">
            <div id="stickynote-background"></div>
            
            <h2 className="overlay-title">{note.title}</h2>
            <button
                className="close-button"
                onClick={(e) => {
                    e.stopPropagation();  // Prevent drag from intercepting
                    setShowNote(false);
                }}
            >
                X
            </button>
            <p className="overlay-text">
                {note.information ? note.information : 'Please give note info'}
            </p>
        </div>
    )
}