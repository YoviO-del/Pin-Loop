import { Footer } from './Footer'
import { Notes } from './Notes'
import { StickyNote } from './StickyNote'
import { DraggableNote } from './DraggableNote'
import { DndContext } from '@dnd-kit/core';
import { useState } from 'react'
import './FrontPage.css'

export function FrontPage({ notes, setNotes }) {
    const [showNote, setShowNote] = useState(false);
    const [id, setId] = useState("");
    const note = notes.find((n) => n.id === id)


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

    return (
        <>
            <main>
                <header>
                    <p className='title'>Task-Pin</p>
                </header>

                <hr />

                <Notes notes={notes} id={id} setId={setId} setShowNote={setShowNote} /*setNotes={setNotes}*/ />


                <Footer notes={notes} setNotes={setNotes} />

            </main>

            {note && showNote ? 
            <DndContext onDragEnd={handleDragEnd}>
                <DraggableNote note={note} setShowNote={setShowNote}/>
            </DndContext> : ''}
            
        </>
    )
}