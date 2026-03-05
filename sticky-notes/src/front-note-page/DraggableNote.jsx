
import { useDraggable } from '@dnd-kit/core';
import { StickyNote } from './StickyNote'
import './StickyNote.css'

export function DraggableNote({ note, setNotes }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: note.id,
  });

  const style = {
  position: 'relative',   // ← change back to absolute
  left: note.x || 0,
  top: note.y || 0,
  transform: transform
    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
    : undefined,
};
  return (
    <div ref={setNodeRef} style={style} className='note-wrapper'>
      {/* Only this handle should be draggable */}
      <div {...listeners} {...attributes} className="drag-handle">
        <p></p>
      </div>

      {/* StickyNote content is not part of the draggable listener */}
      <StickyNote note={note} setNotes={setNotes} />

      <div className="resize-handle" />
    </div>
  );
}
