import './App.css'
import { Routes, Route } from 'react-router-dom';
import { FrontPage } from './front-note-page/FrontPage'
function App() {


  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
    </Routes>
  )
}

export default App
