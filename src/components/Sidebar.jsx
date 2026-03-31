import React, { useState } from 'react'
import NewNote  from './NewNote'

function Sidebar( {notes,folders, setFolders, setSelectedFolder}) {

  const [showFolder, setShowFolder] = useState(false)
  const [newFolderName, setNewFolderName] = useState("")
  // const [showFolderTab, setShowFolderTab] = useState(null)

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      setFolders([...folders, { id: Date.now(), name: newFolderName }])
      setNewFolderName("")
      setShowFolder(false)
    }
  }


  const handleCancel = () => {
    setNewFolderName("")
    setShowFolder(false)
  }


  const handleDeleteFolder = (id) => {
    const updatedFolders = folders.filter(folder => folder.id !== id);

    setFolders(updatedFolders);

    // sync with localStorage
    // localStorage.setItem("folder-data", JSON.stringify(updatedFolders));
  };


  return (
    <div className='bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 shadow-xl backdrop-blur-lg border-r border-[#4b455c] p-4 h-screen flex flex-col basis-[15.5%]'>
      
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-xl text-white font-bold'>Folders</h3>
        <button 
          onClick={() => setShowFolder(true)} 
          className="text-2xl w-9 h-9 flex items-center justify-center text-white bg-[#44356d] rounded-xl border border-[#8464a3] hover:bg-[#392c54] transition-colors">
          +
        </button>
      </div>

      {/* All Notes */}
      <div onClick={ () => setSelectedFolder(false)} className="p-2.5  flex items-center text-sm w-full backdrop-blur-sm bg-[#261a47] text-white border border-white/20 rounded-md hover:bg-[#392c54] cursor-pointer mb-3">
        <i className="fa-regular fa-folder-open "></i>
        <span className='font-semibold ml-3 flex-1'>All Notes</span>
        <span className='rounded-full px-2 py-0.5 bg-white/20 text-xs'>{notes.length}</span>
      </div>

      {/* Folder List */}
      <div className='flex-1 overflow-y-auto overflow-x-hidden pr-1'>
           {folders.map((folder) => (

            // const  folder.name.length > 13 ? folder.name : folder.name.split(" ").slice(0, 10).join(" ") + "...";
            <div 
              key={folder.id}
              onClick={() => setSelectedFolder(folder)} 
              className="p-2.5 flex items-center w-full backdrop-blur-sm relative group bg-[#261a47] text-white border border-white/20 rounded-md hover:bg-[#392c54] cursor-pointer mb-2 transition-colors">
              <i className="fa-regular fa-folder text-sm group-hover:opacity-0"></i>
              <span className='text-sm font-semibold ml-3 flex-1 truncate w-[150px] text-white/90'>
                {folder.name}
              </span>
              <span className='rounded-full px-2 py-0.5 bg-white/20 text-xs ml-2'>  {notes.filter(note => note.folderId === folder.id).length}</span>
              <i                             
                onClick={(e) => {
                e.stopPropagation();
                handleDeleteFolder(folder.id);
                }}
                className="fa-solid fa-trash-can text-sm absolute left-0.5 transition-opacity ease-in duration-200  opacity-0 group-hover:opacity-100 ml-2 text-red-400">
               </i>



            </div>
          ))}

          
      {/* Create Folder Form */}
      {showFolder && 
        <div className='w-full mb-3'>
          <input 
            type="text"  
            placeholder='Folder name...' 
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCreateFolder()}
            className='border border-white/40 rounded-md w-full p-2 pl-3 focus:outline-none focus:border-[#8464a3] bg-[#261a47] text-sm text-white placeholder:text-white/50' 
            autoFocus
          />                                               
          <div className='flex items-center gap-2 mt-2'>
            <button 
              onClick={handleCreateFolder}
              className='flex-1 py-1.5 font-medium text-[#dcfce7] border border-[#2d5a5e] bg-[#203f42] hover:bg-[#264b4e] rounded-md text-sm transition-colors cursor-pointer'>
              ✓ Create 
            </button>
            <button 
              onClick={handleCancel}
              className='flex-1 py-1.5 font-medium text-[#dcfce7] border border-[#2d5a5e] bg-[#203f42] hover:bg-[#264b4e] rounded-md text-sm transition-colors cursor-pointer'>
              ✕ Cancel
            </button>
          </div>
        </div>
      }

      </div>

          
          
          
      {/* ✅ Show FolderTab modal when a folder is clicked */}
    {/* {showFolderTab && <FolderTab setShowFolderTab={setShowFolderTab} folder={showFolderTab} />} */}


    </div>
  )
}

export default Sidebar