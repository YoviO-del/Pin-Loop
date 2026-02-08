import './Notes.css';
import { Link } from 'react-router';

export function Notes({ notes }) {
    return (
        <>
            <div className='notes'>
                <ol>
                    {notes.map((note) => {
                        return (
                            <Link to={`/note/${note.id}`} key={note.id}>
                                <li>{note.title}</li>
                            </Link>
                        )
                    })}
                </ol>
            </div>
        </>
    )
}