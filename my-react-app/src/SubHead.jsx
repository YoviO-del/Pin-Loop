import './SubHead.css'
import { useState } from 'react'

export function SubHead() {

    const [inputValue, setInputValue ] = useState("");

    return (
        <section>
            <input id="submitter" type="text" placeholder="Add a new task..." 
                value={inputValue} onChange={(event) => {
                    setInputValue(event.target.value)
                }}/>
            <button id="add-button" onClick={() => {
                if(inputValue !== ""){
                    console.log(inputValue)
                } else {
                    console.log("Please enter a value")
                }
            }}>Add Task</button>
        </section>
    )
}