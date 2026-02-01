import './Tasks.css'

export function Tasks() {
    return (
        <main>

            <div className="task">
                <input type="checkbox" />
                <p>Learn React</p>
                <button className="delete-button">Delete</button>
            </div>

            <div className="task">
                <input type="checkbox" />
                <p>Build a To-Do App</p>
                <button className="delete-button">Delete</button>
            </div>

            <div className="task">
                <input type="checkbox" />
                <p>Read React Documentation</p>
                <button className="delete-button">Delete</button>
            </div>

            <div className="task">
                <input type="checkbox" />
                <p>Go For a Walk</p>
                <button className="delete-button">Delete</button>
            </div>

            <div className="task">
                4 tasks remaining
                <button id="clear-all-button">Clear Completed</button>
            </div>

        </main>
    )
}