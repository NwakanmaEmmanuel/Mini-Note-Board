import React from 'react'

function Sidebar() {
  return (
    <div className='bg-linear-to-br from-slate-900 via-purple-900 to-slate-900  shadow-xl backdrop-blur-lg border-r border-[#4b455c]  w-[248px] h-screen'>
      <div className='flex gap-[60px] py-4 pl-5 items-center mb-2 '>
          <h3 className='text-xl text-white font-bold  '>Folders</h3>
          <button className=" text-[19px] px-3.5 py-1.5 text-white p-4 bg-[#44356d] rounded-xl outline-0  border border-[#8464a3] mb-1.5 hover:bg-[#392c54] ">+</button>
      </div>

      <div>
        <span className="p-2  pl-4 ml-4.5 backdrop-blur-sm bg-white/20 text-white border-white border  rounded-md hover:bg-[#E9EbEF] hover:text-black ">
          <i className="fa-regular  fa-folder-open"></i>
          <span className='ml-4'>All Notes</span>
          <span className='ml-19 rounded-full px-2 py-1 bg-white/20 text-sm'>0</span>
        </span>
      </div>

      <div>
        <input 
          type="text"  
          placeholder='Folder name...' 
          className='border  border-white rounded-md font-normal flex items-center justify-center mt-4 ml-4.5 p-1.5 pl-4  text-base text-white placeholder:text-white/50
                    w-[221px] ' 
        />

        <div className='flex items-center justify-evenly mt-2 ml-2'>
          <button className='px-6 py-1 font-medium  text-[#dcfce7] border bg-[#203f42] rounded-sm text-sm '>
            ✓  Create
          </button>
          <button className='px-6 py-1 font-medium text-[#dcfce7] border bg-[#203f42] rounded-sm text-sm  '>
            ✕  Cancel
          </button>
        </div>
      </div>

    </div>
  )
}

export default Sidebar