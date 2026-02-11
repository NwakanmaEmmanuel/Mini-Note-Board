
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
// import { useState } from 'react'
import useLocalStorage from './components/useLocalStorage'

function App() {

  const [notes, setNotes] = useLocalStorage('notes-app-data',[])

  function handleDeleteNote(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id))
  }

  function addNewNote(newnote) {
    setNotes(prev => [...prev, newnote])
  }

  const handleUpdateNote = (id, title, content) => {
    setNotes(prev => prev.map(note => 
      note.id === id ? {...note, title, content, updatedAt: new Date().toISOString()  } 
      : note
    ))
  }
  return (

    <div className='flex h-screen overflow-hidden  '>
      <Sidebar/>
      <Header addNewNote={addNewNote} handleDeleteNote={handleDeleteNote} notes={notes} handleUpdateNote={handleUpdateNote}/>
    </div>
      
  )
}

export default App
