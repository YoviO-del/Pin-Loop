import './App.css';
import { Routes, Route } from 'react-router-dom';
import { FrontPage } from './front-note-page/FrontPage';
import { AtomicNote } from './single-note-page/AtomicNote';
import { useEffect, useState } from 'react';

function App() {
  // Move the logic from content-main.jsx here
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem('notes')) || [];
  });

  useEffect(() => {
    // Save notes to localStorage whenever they change
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <Routes>
      <Route path="/" element={<FrontPage notes={notes} setNotes={setNotes} />} />
      <Route path="/note/:id" element={<AtomicNote notes={notes} setNotes={setNotes} />} />
    </Routes>
  );
}

export default App;