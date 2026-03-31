
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
// import { useState } from 'react'
import useLocalStorage from './components/useLocalStorage'
import { useState } from 'react'

function App() {

  const [notes, setNotes] = useLocalStorage('notes-app-data',[])

  const [selectedFolder, setSelectedFolder] = useState('')
  const [folders, setFolders] = useLocalStorage('folder-data', [])

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
      <Sidebar folders={folders} setFolders={setFolders} notes={notes} setSelectedFolder={setSelectedFolder}/>
      <Header folders={folders} setFolders={setFolders} addNewNote={addNewNote} handleDeleteNote={handleDeleteNote} notes={notes} selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} handleUpdateNote={handleUpdateNote}/>
       
    </div>
      
  )
}

export default App
