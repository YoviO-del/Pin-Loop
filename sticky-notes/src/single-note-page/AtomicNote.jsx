import { useParams, Link } from "react-router-dom";
import { NoteInput } from "./NoteInput";
import './AtomicNotes.css'

export function AtomicNote({notes}) {
    // it's orinially a string
    const { id  } = useParams();
    console.log("notes:", notes);
console.log("id from params:", id);

    const note = notes.find(note => note.id === (id));


    if(!note){
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
                <hr></hr>
            </header>

            

            

            <NoteInput />
        </main>
    )
}