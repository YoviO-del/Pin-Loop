import '../front-note-page/Footer.css'
import './NoteInput.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SingleNoteText } from './SingleNoteText'
import { useNavigate } from 'react-router-dom'

export function NoteInput({note, setNotes, notes}) {
   const [edit, setEdit] = useState(false)
   const navigate = useNavigate();
   

   const modifyEdit = () => {
      setEdit(!edit)
   }

   const deleteNote = () => {
      setNotes(prev => prev.filter(n => n.id !== note.id))
   }

   return (
      <>
         <SingleNoteText edit={edit} note={note} setNotes={setNotes} notes={notes} />

         <footer>
            <hr id='second-line' />
            <Link to={"/"}>
               <button className='note-creator-button' >Home</button>
            </Link>
            <button className={edit ? 'save-button' : 'edit-button'} onClick={modifyEdit}>
               {edit ? "Save" : "Edit"}
            </button>
            <button id='delete-button' onClick={() => {
               deleteNote();
               navigate('/')
            }}>
               Delete
            </button>
         </footer>
      </>
   )
}