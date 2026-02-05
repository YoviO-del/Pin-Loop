import './Tasks.css'
import { Task } from './Task'
export function Tasks({ tasks, setTasks }) {

    return (
        <main>

            <Task tasks={tasks} setTasks={setTasks}/>


            {tasks.length > 0 &&
                <div className="task" onClick={() => {
                    setTasks([]);
                    // is this optimal?
                }}>
                    {tasks.length} tasks remaining
                    <button id="clear-all-button">Clear Completed</button>
                </div>
            }

        </main>
    )
}