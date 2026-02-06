
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

  return (



    <div className='flex '>
      <Sidebar/>
      <Header addNewNote={addNewNote} handleDeleteNote={handleDeleteNote} notes={notes}/>
    </div>
      
  )
}

export default App
