import './SubHead.css'
import { useEffect, useState } from 'react'

export function SubHead({ tasks, setTasks }) {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        console.log(tasks)
    }, [tasks])

    const addTask = () => {
        if (inputValue !== "") {
            setTasks([...tasks, {
                task: inputValue,
                id: crypto.randomUUID(),
                checked: false
            }])
        } else {
            console.log("Please enter a value")
        }

        
    }

    const enterTask = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    

    return (
        <section>
            <input id="submitter" type="text" placeholder="Add a new task..."
                value={inputValue} onChange={(event) => {
                    setInputValue(event.target.value)
                }} onKeyDown={enterTask}/>

            <button id="add-button" onClick={addTask}>Add Task</button>
        </section>
    )
}