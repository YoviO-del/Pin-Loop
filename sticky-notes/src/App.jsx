import './App.css'
import { Footer } from './Footer'
import { Notes } from './Notes'
function App() {


  return (
    <main>
      <header>
        <p className='title'>Sticky Notes Extension - MVP Check list</p>
      </header>

      <hr />

      <Notes />

      <hr />

      <Footer />
    </main>
  )
}

export default App
