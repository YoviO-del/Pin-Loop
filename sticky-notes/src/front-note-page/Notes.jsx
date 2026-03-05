//import { useEffect } from 'react';
import './Notes.css';
import { Link } from 'react-router-dom';
import { StickyNote } from './StickyNote';

export function Notes({setNotes, notes }) {

  

  return (
    <>
      <div className='notes'>
        <ol>
          {notes.map((note) => (
            <li key={note.id} onMouseDown={() => {

              setNotes( prev => prev.map(n =>
                        n.id === note.id
                            ? { ...n, visibility: !n.visibility }
                            : n
                    ))
            }}>
              <Link to={`/note/${note.id}`}>{note.title}</Link>
            </li>
          ))}


        </ol>

      </div>

    </>
  );


}