import './App.css';
import { useState } from 'react';
import { Header } from './Header';
import { SubHead } from './SubHead';
import { Tasks } from './tasks';
function App() {

  const [tasks, setTasks] = useState([])
 
  
  return(
    <>
      <Header />
      <SubHead tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
