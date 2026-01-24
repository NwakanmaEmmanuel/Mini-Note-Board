import Main from './Main'

export default function Header() {
  return (
    <div className='flex-1'>
      <div className='bg-linear-to-br from-slate-900 via-[#421267] to-slate-900  shadow-xl backdrop-blur-lg border-b border-[#4b455c] outline-0  flex flex-1 h-48 items-center justify-center flex-col 
      
      '>
          <h1 className='mb-4 text-shadow-[0_0_30px_rgba(255,255,255,0.3)] text-6xl text-[#f3e9ff] font-black '>Notes✨</h1>
          <div className='relative'>
            <i className="fas fa-search absolute left-4.5 bottom-3 z-50 text-[#a8a0b1]"></i>
              <input 
                type="text" 
                name="" 
                placeholder='Search notes...'
                className='w-116 h-9.5 p-2.5 pl-11.5   focus:border-3 focus:outline-[#534e64]  outline-0 bg-[#270f3d] border-[#7e7885] border-[0.3px] text-white placeholder:text-[#a8a0b1] rounded-lg '
              />
          </div>
      </div>
    <Main/>
    </div>
    
  )
}




// <input
//       className="search"

//       type="text"
//       placeholder="Search movies..."#4e1976 oklch(38.1% 0.176 304.987);

//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//       ref={inputEl}
//     />
//   );#f3e9ff #dadeff     text-shadow: rgba(255, 255, 255, 0.3) 0px 0px 30px;