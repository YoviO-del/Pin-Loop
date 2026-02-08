import '../front-note-page/Footer.css'
import { Link } from 'react-router'
import './NoteInput.css'
export function NoteInput() {

    return (

        <footer>
            <hr id='second-line' />
            <Link to={"/"}>
                <button className='note-creator-button' >Home</button>
            </Link>
            <input type="text" placeholder='Write more about your note'
                className='note-text'
            />
        </footer>
    )
}