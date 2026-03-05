import { DraggableNote } from './DraggableNote'
import { DndContext } from '@dnd-kit/core';

export function Opera({setNotes, notes}) {

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
            <DndContext onDragEnd={handleDragEnd}>
                {notes.map((note) => {
                    if(note.visibility){
                      return  note.visibility ? <DraggableNote note={note} setNotes={setNotes} key={note.id} /> : null
                    }
                    return null;
                })}
            </DndContext>
        </>
    )
}