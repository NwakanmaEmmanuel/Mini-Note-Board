import Main from './Main'
import FolderTab from './FolderTab'
import { useState } from 'react';

export default function Header( {addNewNote, handleDeleteNote, folders, selectedFolder, setSidebarOpen, setSelectedFolder, notes, handleUpdateNote}) {

  const [searchNote, setSearchNote] = useState("");

  const searchedNote =
  searchNote.trim().length > 0
    ? notes.filter((note) =>
        `${note.title} ${note.content}`
          .toLowerCase()
          .includes(searchNote.toLowerCase())
      )
    : notes;

  return (
    <div className=' flex flex-col min-w-0 flex-1 '>

      <div className='bg-linear-to-br from-slate-900 via-[#421267] to-slate-900  shadow-xl backdrop-blur-lg border-b border-[#4b455c] outline-0  flex flex-1 h-48 items-center justify-center flex-col basis-[24%]'>
          <button className='text-2xl md:hidden absolute left-[21px] top-[37px] text-[#e7dede] hover:text-white active:text-white' onClick={() => setSidebarOpen(true)}>☰</button>
          <h1 className='mb-4 text-shadow-[0_0_30px_rgba(255,255,255,0.3)] text-6xl text-[#f3e9ff] font-black '>Notes✨</h1>
          <div className='relative'>
            <i className="fas fa-search absolute left-4.5 bottom-3 z-50 text-[#a8a0b1]"></i>
              <input 
                value={searchNote}
                onChange={(e) => setSearchNote(e.target.value)}
                type="text" 
                name="" 
                placeholder='Search notes...'
                className='md:w-116 w-full h-9.5 p-2.5 pl-11.5   focus:border-3 focus:outline-[#534e64]  outline-0 bg-[#270f3d] border-[#7e7885] border-[0.3px] text-white placeholder:text-[#a8a0b1] rounded-lg '
              />
          </div>
          
      </div>

      <Main addNewNote={addNewNote} notes={searchedNote} folders={folders} handleDeleteNote={handleDeleteNote} selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} handleUpdateNote={handleUpdateNote}/>


    </div>
    
  )
}


