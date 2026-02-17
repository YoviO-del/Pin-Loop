import { useState, useEffect } from "react"

export function SingleNoteText({ edit, note, setNotes, notes }) {

  const text = notes.find((n) => { return (n.id === note.id) })

  const checkText = () => {
    if (text?.information !== '') {
      return text.information
    } else {
      return ''
    }
  }



  const [noteInput, setNoteInput] = useState(checkText)

  useEffect(() => {
    setNoteInput(text?.information || '')
  }, [note.id])
  /*
    When you:

    Click a different note

    Open another note

    Switch between notes
   */


  useEffect(() => {
    if (!edit) {
      setNotes(prev =>
        prev.map(n =>
          n.id === note.id ? { ...n, information: noteInput } : n
        )
      )
    }
  }, [edit, noteInput, note.id])

  return (
    <>
      <textarea className="note-info"
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        disabled={!edit}
        placeholder={noteInput === '' ? "Start typing your notes here…" : text.information} />
    </>
  )
}