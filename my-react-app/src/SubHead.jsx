import './SubHead.css'
import { useEffect, useState } from 'react'

export function SubHead({tasks, setTasks}) {
    const [inputValue, setInputValue ] = useState("");

    useEffect(() => {
        console.log(tasks)
    }, [tasks])


    return (
        <section>
            <input id="submitter" type="text" placeholder="Add a new task..." 
                value={inputValue} onChange={(event) => {
                    setInputValue(event.target.value)
                }}/>
            <button id="add-button" onClick={() => {
                if(inputValue !== ""){
                    setTasks([...tasks, inputValue])
                } else {
                    console.log("Please enter a value")
                }
            }}>Add Task</button>
        </section>
    )
}