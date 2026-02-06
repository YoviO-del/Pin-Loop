import { useState } from 'react'
import { Footer } from './Footer'
import { Notes } from './Notes'
import './FrontPage.css'

export function FrontPage() {
     const [notes, setNotes] = useState([])

    return (
        <>
            <main>
                <header>
                    <p className='title'>Sticky Notes Extension - MVP Check list</p>
                </header>

                <hr />

                <Notes notes={notes} />

                <hr />

                <Footer notes={notes} setNotes={setNotes} />
            </main>
        </>
    )
}