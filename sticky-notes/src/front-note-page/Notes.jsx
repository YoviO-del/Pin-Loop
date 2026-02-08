import './Notes.css';
import { Link } from 'react-router';

export function Notes({ notes }) {
    return (
        <>
            <div className='notes'>
                <ol>
                    {notes.map((note) => {
                        return(
                            <li key={note.id}>{note.title}</li>
                        )
                    })}
                </ol>
            </div>
        </>
    )
}