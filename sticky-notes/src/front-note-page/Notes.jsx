import { useEffect, useState } from 'react';
import './Notes.css';
import { Link } from 'react-router-dom';
import { StickyNote } from './StickyNote';
//import { DndContext } from '@dnd-kit/core';
//import { DraggableNote } from './DraggableNote';

export function Notes({ notes }) {

  const [id, setId] = useState("");
  const [showNote, setShowNote] = useState(false);
  /*
    function handleDragEnd(event) {
      const { active, delta } = event;
      const noteId = String(active.id);
  
      setNotes(prev =>
        prev.map(note =>
          String(note.id) === noteId
            ? {
              ...note,
              x: (note.x || 0) + delta.x,
              y: (note.y || 0) + delta.y,
            }
            : note
        )
      );
    }
  */

  //<DndContext onDragEnd={handleDragEnd}></DndContext>
  /*
    const handleRightClick = (event) => {
          if (event.key === "Enter") {
              addTask();
          }
      };
  */
  const note = notes.find((n) => n.id === id)

  useEffect(() => {
    console.log(id);
  }, [id])

  return (
    <div className='notes'>
      <ol>
        {notes.map((note) => (
          <li key={note.id} onMouseDown={(e) => {
            if (e.button === 0) {
              setShowNote(true)
              setId(note.id)
            } else if (e.button === 1) {
              setShowNote(false)
            }

          }
          }>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </li>
        ))}


      </ol>
      {note && showNote ? <StickyNote note={note} setShowNote={setShowNote}/> : ''}
    </div>
  );


}