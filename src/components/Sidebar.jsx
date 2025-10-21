import React from 'react'

function Sidebar() {
  return (
    <div className='bg-linear-to-bl from-purple-200 to-[#0f172b] w-[248px] h-[500px]'>
        <div className='flex gap-[60px] py-4 pl-5 items-center mb-2 '>
            <h3 className='text-xl text-white font-bold '>Folders</h3>
            <button className=' text-white p-4 bg-black px-2.5 rounded-sm outline-0 py-0.5 border border-white mb-[6px] '>+</button>
        </div>
        <div>
          <span className='p-2 border-white border rounded-sm'>
            <i class="fa-regular fa-folder-open"></i>
            <span className='ml-4'>All Notes</span>
            <span className='ml-19 rounded-full px-2 py-1 bg-purple-600 text-sm'>0</span>
          </span>

        </div>

    </div>
  )
}

export default Sidebar