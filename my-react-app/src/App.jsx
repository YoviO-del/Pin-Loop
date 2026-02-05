import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Header } from './Header';
import { SubHead } from './SubHead';
import { Tasks } from './tasks';

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  const screen = useRef(null)

  useEffect(() => {
    const el = screen.current;
    if (el && el.scrollHeight > el.clientHeight) {
      el.scrollTop = el.scrollHeight;
      //makes it scrol to the bottom 
      // by making the top of the view show the total height
    }
  }, [tasks]);

  return (
    <div ref={screen} className='app-container'>
      <Header />
      <SubHead tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;