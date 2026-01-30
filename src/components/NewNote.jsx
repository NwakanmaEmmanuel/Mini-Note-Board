import Notes from "./NoteCard"
import { useState } from "react"




export default function NewNote( {setShowBox , addNewNote}) {


  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")



  // const date = new Date(); // current date and time

  // const year = date.getFullYear();         // 2026
  // const month = date.getMonth() + 1;       // 1-12 (0 is January, so +1)
  // const day = date.getDate();              // 1-31
  // const dayOfWeek = date.getDay();         // 0-6 (0 = Sunday)
  // const hours = date.getHours();           // 0-23
  // const minutes = date.getMinutes();       // 0-59
  // const seconds = date.getSeconds();



//   const date = new Date(note.createdAt)

// const shortMonth = date
//   .toLocaleString("en-US", { month: "short" })
//   .toUpperCase()

// const longMonth = date.toLocaleString("en-US", {
//   month: "long"
// })

// const fullDate = date.toLocaleString("en-US", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// })


  function handleCreateNote(e) {
  e.preventDefault();
    const createdAt = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });


  
    addNewNote({
      id: Date.now(),
      title,
      content,
      createdAt
    })

      setShowBox(false);
    
  }


  return (
    <form onSubmit={handleCreateNote} className="bg-linear-to-br from-[#2b2434] via-[#2e213a] to-[#20192b]  w-[520px] right-[600px] top-[5px] h-[273px] p-7 absolute rounded-xl border-[0.5px] border-[#4b455c] ">
      <button className="text-black text-lg font-bold absolute left-[488px] top-1.5  "  onClick={() => setShowBox(false)}>x</button>
      <h1 className="text-white text-2xl font-bold mb-2">Create New Note</h1>
      <p className="text-[#c1bcc5] text-sm ">Create a new note with an optional title, content, and folder organization.</p>
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Note title...'
        className=' min-w-116  h-9.5 p-2.5 text-sm mb-3.5 focus:border-3 focus:outline-[#534e64]  outline-0 bg-[#3f3848] border-[#7e7885] border-[0.3px] text-white placeholder:text-[#a8a0b1] rounded-lg '
              />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} className="bg-[#3f3848] w-116 h-15 mb-2.5  p-2.5 text-white placeholder:text-[#a8a0b1] border-[0.3px] text-sm focus:border-3  focus:outline-[#534e64]  outline-0  border-[#7e7885]  rounded-lg" placeholder="Start writing to your note..."></textarea>
    <div className="flex justify-self-end">
      <button className="px-5 py-2 text-sm font-bold text-white bg-linear-to-br from-[#9641dd] via-[#5465da] to-[#078eb2]  rounded-lg" onClick={() => setShowBox(false)}>Cancel</button> 
      <button type="submit" className="px-3 py-2 ml-2 text-sm font-bold text-white bg-linear-to-br from-[#9641dd] via-[#5465da] to-[#078eb2]  rounded-lg">
        <span className="mr-2">✨ </span> Create Note
      </button>
      
    </div>

    </form>
  )
}
