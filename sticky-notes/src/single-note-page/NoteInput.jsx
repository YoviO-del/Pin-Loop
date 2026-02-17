import '../front-note-page/Footer.css'
import './NoteInput.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SingleNoteText } from './SingleNoteText'

export function NoteInput({note, setNotes, notes}) {
   const [edit, setEdit] = useState(false)


   const modifyEdit = () => {
      setEdit(!edit)
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
         </footer>
      </>
   )
}