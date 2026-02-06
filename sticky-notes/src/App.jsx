import './App.css'

function App() {
  

  return (
    <body>
      <header>
        <p className='title'>Sticky Notes Extension - MVP Check list</p>
      </header>

      <hr />

      <div className='notes'>
        <ol>
          <li>Create a note(text only)</li>
          <li>See a list of saved notes</li>
          <li>Click a not of saved notes</li>
          <li>No folders, no tags, no search</li>
          <li>Stick Shows the note text </li>
        </ol>
      </div>

      <hr />

      <footer>
        <button className='note-creator-button'>+ New Note</button>
        <input type="text" placeholder='Type note text here...' 
        className='note-text'/>
      </footer>
    </body>
  )
}

export default App
