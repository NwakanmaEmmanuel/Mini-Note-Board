import React, { useState } from 'react'

function Sidebar() {


  const [showFolder, setShowFolder] = useState(false)
  const [folders, setFolders] = useState([])  // Array to store folders
  const [newFolderName, setNewFolderName] = useState("")


  const handleCreateFOlder = () => {
    if (newFolderName) {
      setFolders([...folders, {id: Date.now(), name: newFolderName }])
      setNewFolderName("")
      setShowFolder(false)
    }
  }




  return (
    <div className='bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 shadow-xl backdrop-blur-lg border-r border-[#4b455c] p-2.5  h-screen flex flex-col items-center basis-[15.5%]'>
      <div className='flex  py-4 pl-5 items-center mb-2 '>
          <h3 className='text-xl text-white font-bold  '>Folders</h3>
          <button onClick={ () => setShowFolder(true)} className=" text-[19px] px-3.5 py-1.5 ml-[60px] text-white p-4 bg-[#44356d] rounded-xl outline-0  border border-[#8464a3] mb-1.5 hover:bg-[#392c54] ">+</button>
      </div>

        <div className="p-2 flex items-center justify-center backdrop-blur-sm bg-[#261a47]   text-white border-white/20 border  rounded-md hover:bg-[#E9EbEF] hover:text-black ">
          <i className="fa-regular  fa-folder-open"></i>
          <span className='font-semibold ml-4'>All Notes</span>
          <span className='ml-[67px] rounded-full px-2 py-1 bg-white/20 text-sm'>0</span>
        </div>
      {showFolder && 
        <div>
          <input 
            type="text"  
            placeholder='Folder name...' 
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)} 
            className='border  border-white rounded-md font-normal flex items-center justify-center w-full mt-4  p-1.5 pl-4 focus:border-3 focus:outline-[#4a445b]  bg-[#261a47]  text-base text-white placeholder:text-white/50  ' 
          />                                               
            <div className='flex items-center justify-evenly mt-2'>
            <button 
              onClick={handleCreateFOlder}
              className='px-6 py-1 font-medium  text-[#dcfce7] border bg-[#203f42] hover:bg-[#264b4e] rounded-sm text-sm '>
              ✓  Create 
            </button>
            <button 
            onClick={() => setShowFolder(false)}
            className='px-6 py-1 font-medium text-[#dcfce7] border bg-[#203f42] hover:bg-[#264b4e] rounded-sm text-sm  '>
              ✕  Cancel
            </button>
          </div>
          
        </div>
      }



      {/* Folder List */}
      <div className='w-full px-2 mt-2 overflow-y-auto'>
        {folders.map((folder) => (
          <div 
            key={folder.id} 
            className="p-2 flex items-center backdrop-blur-sm bg-[#261a47] text-white border border-white/20 rounded-md hover:bg-[#392c54] cursor-pointer mb-[6px]">
            <i className="fa-regular fa-folder"></i>
            <span className='font-semibold ml-4'>{folder.name}</span>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Sidebar
