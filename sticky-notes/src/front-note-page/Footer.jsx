import './Footer.css'
import { useState, useEffect } from 'react'

export function Footer({notes, setNotes}) {

    const [input, setInput] = useState("")

    const getInput = (event) => {
        setInput(event.target.value)
    }

    const addTask = () => {
        if (input !== "") {
            setNotes([...notes, {
                id: crypto.randomUUID(),
                title: input//,
                //x:0,
                //y: 0
            }])
        }

    }

    const EnterKey = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    }


    useEffect(() => {
        console.log(notes)
    }, [notes])


    return (
        <footer>
            <hr id='second-line' />
            <button className='note-creator-button' onClick={addTask}>+ New Note</button>
            <input type="text" placeholder='Create Title here...'
                className='note-text'
                value={input} onChange={getInput} onKeyDown={EnterKey} />
        </footer>
    )
}