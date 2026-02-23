/*
import { Link } from 'react-router-dom';
import { useDraggable } from '@dnd-kit/core';

export function DraggableNote({ note }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: note.id,
  });

  const style = {
    position: 'absolute',
    width: '200px',
    padding: '10px',
    background: 'yellow',
    left: note.x || 0,
    top: note.y || 0,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <li ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Link to={`/note/${note.id}`}>{note.title}</Link>
    </li>
  );
}
  */