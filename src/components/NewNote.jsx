import { useState } from "react"




export default function NewNote( {setShowBox , addNewNote, notes}) {


  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  function addNote(){
    addNewNote({
      title,
      content
    })
    
  }


  return (
    <div className="bg-linear-to-br from-[#2b2434] via-[#2e213a] to-[#20192b]  w-[520px] right-[600px] top-[5px] h-[273px] p-7 absolute rounded-xl border-[0.5px] border-[#4b455c] ">
      <button className="text-black text-lg font-bold absolute left-[488px] top-1.5  "  onClick={() => setShowBox(false)}>x</button>
      <h1 className="text-white text-2xl font-bold mb-2">Create New Note</h1>
      <p className="text-[#c1bcc5] text-sm ">Create a new note with an optional title, content, and folder organization.</p>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Note title...'
        className=' min-w-116  h-9.5 p-2.5 text-sm mb-3.5 focus:border-3 focus:outline-[#534e64]  outline-0 bg-[#3f3848] border-[#7e7885] border-[0.3px] text-white placeholder:text-[#a8a0b1] rounded-lg '
              />
      <textarea onChange={(e) => setContent(e.target.value)} className="bg-[#3f3848] w-116 h-15 mb-2.5  p-2.5 text-white placeholder:text-[#a8a0b1] border-[0.3px] text-sm focus:border-3  focus:outline-[#534e64]  outline-0  border-[#7e7885]  rounded-lg" placeholder="Start writing to your note..."></textarea>
    <div className="flex justify-self-end">
      <button className="px-5 py-2 text-sm font-bold text-white bg-linear-to-br from-[#9641dd] via-[#5465da] to-[#078eb2]  rounded-lg" onClick={() => setShowBox(false)}>Cancel</button> 
      <button className="px-3 py-2 ml-2 text-sm font-bold text-white bg-linear-to-br from-[#9641dd] via-[#5465da] to-[#078eb2]  rounded-lg">
        <span onClick={addNote} className="mr-2">✨ </span> Create Note
      </button>
      notes.m
    </div>

    </div>
  )
}
