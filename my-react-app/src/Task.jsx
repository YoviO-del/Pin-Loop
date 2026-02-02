export function Task({ setTasks, tasks }) {

    return (

        <>
            {tasks.map((task) => {
                return (
                    <div className="task" key={task.id}>
                        <input type="checkbox" checked={task.checked}
                            onChange={() => {
                                setTasks(prevTasks =>
                                    prevTasks.map(t =>
                                        t.id === task.id ? { ...t, checked: !t.checked } : t
                                    )
                                    
                                );
                            }} />
                        <p style={{ textDecoration: task.checked ? 'line-through' : '' }}>{task.task}</p>
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
    //for displaying you don't need to change anything but if I wan't to actually
    //manimpulate something I use setTasks and run the function i need
}