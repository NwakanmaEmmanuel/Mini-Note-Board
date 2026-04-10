import { useState } from "react"




export default function NewNote( {setShowBox, folders,currentFolderId, addNewNote}) {


  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [selectedFolderId, setSelectedFolderId] = useState(currentFolderId || "")





  function handleCreateNote(e) {
  e.preventDefault();
    // const createdAt = new Date()
    const now = new Date().toISOString()

    addNewNote({
      id: Date.now(),
      title,
      content,
      folderId: selectedFolderId || null,

      createdAt: now,
      updatedAt: now
    })

      setShowBox(false);
    
  }


  return (
    <div className="bg-black/40 fixed inset-0 flex p-4 items-center justify-center" 
        onClick={() => setShowBox(null)}>

      <form onSubmit={handleCreateNote} className="bg-linear-to-br from-[#2b2434] via-[#2e213a] to-[#20192b] w-full relative max-w-[520px]  min-h-[273px] p-7  rounded-xl border-[0.5px] border-[#4b455c] "
        onClick={(e) => e.stopPropagation()}>                                           {/* w-full max-w-[520px] relative */}

      <button className="text-black text-lg font-bold absolute  top-2 right-3  "  onClick={() => setShowBox(false)}>x</button>
      <h1 className="text-white text-2xl font-bold mb-2">Create New Note</h1>
      <p className="text-[#c1bcc5] text-sm ">Create a new note with an optional title, content, and folder organization.</p>
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Note title...'
        className=' w-full  h-9.5 p-2.5 text-sm mb-3.5 focus:border-3 focus:outline-[#534e64]  outline-0 bg-[#3f3848] border-[#7e7885] border-[0.3px] text-white placeholder:text-[#a8a0b1] rounded-lg '
      />

      {folders ?       
        <select className="border w-full p-1.5 mb-3.5 rounded-lg bg-[#3f3848] border-[#7e7885] text-sm outline-0 text-white " 
        value={selectedFolderId} onChange={(e) => setSelectedFolderId(Number(e.target.value))} >
          <option className="bg-black" value="" >No folder</option>
          {folders.map((f) => (
            <option className="bg-black hover:bg-white"
               key={f.id} value={f.id} >{f.name}</option>

          )) }
        </select> : ""}

      <textarea value={content} onChange={(e) => setContent(e.target.value)} className="bg-[#3f3848] w-full h-15 mb-2.5  p-2.5 text-white placeholder:text-[#a8a0b1] border-[0.3px] text-sm focus:border-3  focus:outline-[#534e64]  outline-0  border-[#7e7885]  rounded-lg" placeholder="Start writing to your note..."></textarea>
    
    <div className="flex justify-self-end">
      <button className="px-5 py-2 text-sm font-bold text-white bg-linear-to-br from-[#9641dd] via-[#5465da] to-[#078eb2]  rounded-lg" onClick={() => setShowBox(false)}>Cancel</button> 
      <button type="submit" className="px-3 py-2 ml-2 text-sm font-bold text-white bg-linear-to-br from-[#9641dd] via-[#5465da] to-[#078eb2]  rounded-lg">
        <span className="mr-2">✨ </span> Create Note
      </button>
      
    </div>

    </form>
    </div>

    
  )
}
