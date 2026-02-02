import './Tasks.css'
import { Task } from './Task'
export function Tasks({ tasks }) {

    
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

            <Task tasks={tasks}/>


            {tasks.length > 0 &&
                <div className="task">
                    {tasks.length} tasks remaining
                    <button id="clear-all-button">Clear Completed</button>
                </div>
            }

        </main>
    )
}