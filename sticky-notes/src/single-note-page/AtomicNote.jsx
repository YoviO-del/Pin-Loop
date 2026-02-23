import { useParams, Link } from "react-router-dom";
import { NoteInput } from "./NoteInput";
import './AtomicNotes.css'

export function AtomicNote({ notes, setNotes }) {
    // it's orinially a string
    const { id } = useParams();
    console.log("notes:", notes);
    console.log("id from params:", id);

    const note = notes.find(note => String(note.id) === String(id));


    if (!note) {
        return (
            <>
                <p>Note is not found</p>
                <Link to={'/'}>
                    <button>Home</button>
                </Link>
            </>
        )

    }

    

    return (
        <main>
            <header>
                <p className='title'>{note.title}</p>
                <hr />
            </header>



            <NoteInput notes={notes} note={note} setNotes={setNotes} />
        </main>
    )
}