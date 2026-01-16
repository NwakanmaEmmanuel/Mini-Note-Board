import React from 'react'

export default function Main() {
  return (
    <div className='bg-[#401765]  flex flex-1 h-48 items-center justify-center flex-col 
    
    '>
        <h1 className='mb-4 text-shadow-[0_0_30px_rgba(255,255,255,0.3)] text-6xl text-[#f3e9ff] font-black '>Notes✨</h1>
        <div>
            <input 
              type="text" 
              name="" 
              placeholder='Search notes...'
              className='w-116 h-10 p-2.5 bg-[#270f3d] border text-[#a8a0b1] rounded-lg '
            />
        </div>
    </div>
  )
}




// <input
//       className="search"

//       type="text"
//       placeholder="Search movies..."
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       ref={inputEl}
//     />
//   );#f3e9ff #dadeff     text-shadow: rgba(255, 255, 255, 0.3) 0px 0px 30px;