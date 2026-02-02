import { useState } from "react";
export function Task({tasks}) {
    const [checked, setChecked] = useState(false);

    return(
        <>
        {tasks.map((task) => {
                return (
                    <div className="task">
                        <input type="checkbox" onClick={() => {
                            !checked ? setChecked(true) : setChecked(false)
                            
                        }}/>
                        <p style={{textDecoration: checked ? 'line-through': ''}}>{task}</p>
                        <button className="delete-button">Delete</button>
                    </div>
                )
            })}
        </>
    )
    
}