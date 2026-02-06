
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



    <div className='flex h-screen overflow-hidden '>
      <Sidebar/>
      <div className='flex-1 flex flex-col overflow-hidden' >
        <Header addNewNote={addNewNote} handleDeleteNote={handleDeleteNote} notes={notes}/>
      </div>
    </div>
      
  )
}

export default App
