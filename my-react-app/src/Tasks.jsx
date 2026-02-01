import './Tasks.css'

export function Tasks({tasks}) {
    

    /*
    useEffect(() => {
        tasks.map((task) => {
            <div className="task">
                <input type="checkbox" />
                <p>{task}</p>
                <button className="delete-button">Delete</button>
            </div>

            setNumTasks(numTasks + 1)
        });
    },[tasks])
    */

    return (
        <main>

            {tasks.map((task) => {
                return(
                    <div className="task">
                        <input type="checkbox" />
                        <p>{task}</p>
                        <button className="delete-button">Delete</button>
                    </div>
                )
            })}
            

            <div className="task">
                {tasks.length} tasks remaining
                <button id="clear-all-button">Clear Completed</button>
            </div>

        </main>
    )
}