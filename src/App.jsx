
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { useState } from 'react'

function App() {

  const [notes, setNotes] = useState([])

  function addNewNote(newnote) {
    setNotes(note => [...note, newnote])
  }

  return (



    <div className='flex '>
      <Sidebar/>
      <Header addNewNote={addNewNote} notes={notes}/>
    </div>
      
  )
}

export default App
