import { useState } from "react";
export function Task({ setTasks, tasks }) {
    


const [checked, setChecked] = useState(false);




    return (
        
        <>
            {tasks.map((task) => {
                return (
                    <div className="task" key={task.id}>
                        <input type="checkbox" onClick={() => {
                            !checked ? setChecked(true) : setChecked(false)

                        }} />
                        <p style={{ textDecoration: checked ? 'line-through' : '' }}>{task.task}</p>
                        <button className="delete-button" onClick={() => {
                            setTasks(prevTasks =>
                                prevTasks.filter(t => t.id !== task.id)
                            )
                        }}>Delete</button>
                    </div>
                )
            })}
        </>
    )

}