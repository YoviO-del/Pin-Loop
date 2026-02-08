import { useState, useEffect } from 'react'
import { Footer } from './Footer'
import { Notes } from './Notes'
import './FrontPage.css'

export function FrontPage() {
    const [notes, setNotes] = useState(() => {
        return JSON.parse(localStorage.getItem('notes')) || []
    
    });

    useEffect(() => {
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])

    return (
        <>
            <main>
                <header>
                    <p className='title'>Sticky Notes Extension - MVP Check list</p>
                </header>

                <hr />

                <Notes notes={notes} />


                <Footer notes={notes} setNotes={setNotes} />
            </main>
        </>
    )
}