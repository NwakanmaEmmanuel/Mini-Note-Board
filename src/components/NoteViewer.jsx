import  { useState } from 'react'


export default function NoteViewer( {note ,setSelectedNote,editingNoteId, handleUpdateNote , handleDeleteNote } ) {

    

    let folder 
    const [isEditing, setIsEditing] = useState()
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");

    const handleEditClick = () => {
        setIsEditing(true)
    }

    




    return (
        // adding modal class
        <div
            onClick={() => setSelectedNote(null)}
            className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className=' bg-linear-to-br from-[#763ea0] via-[#571788] to-[#331b58]  border border-[#754797] max-h-[80vh]  text-amber-50 left-[20%] top-[30%] p-6 rounded-[10px] w-[510px] flex flex-col gap-2.5'
            onClick={(e) => e.stopPropagation()} >

            
                <div  className='flex justify-between mb-2.5'>
                    {isEditing ? (
                    <input 
                        type="text"
                        className="text-white outline-0 border-[#7e7885] border-4 py-[7px] text-[13px] px-2.5 rounded-lg mb-2.5 bg-[#451f73]"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        autoFocus/>
                    ) : (
                    <h1 className='text-3xl font-bold' >{note.title || "Untitled Note"}</h1>

                    )}
                    <button onClick={() => setSelectedNote(null)} className=' absolute left-[482px] text-[17px] font-bold text-lg  top-0 hover:scale-[1.3] '>&times;</button>
                    <div  className='flex'>
                        <button onClick={() => handleEditClick(note)}  className='flex gap-2 items-center px-4 border border-[#44609e] rounded-md cursor-auto text-[#a1adca] bg-[#3f4773] hover:bg-[#414f9b] ' >
                            <i className="fa-regular fa-pen-to-square text-[13px] font-extrabold  hover:text-black"></i>               
                            <p>Edit</p>
                        </button>
                        <button onClick={() => {  handleDeleteNote(note.id); setSelectedNote(null)}} className='flex gap-2 ml-[18px] px-4 items-center  border border-[#aa4a5d] rounded-md cursor-auto text-[#ffe2e2] bg-[#692432] hover:bg-[#892237]'>
                            <i className="fa-solid fa-trash-can text-[13px] font-extrabold "></i>
                            <p>Delete</p>
                        </button>
                    </div>    
                </div>
                

                    <div className='flex gap-[23px]  mb-4'>
                        <div className='bg-[#754797] rounded-2xl px-[13px] py-1.5'>
                            <i className="fa-regular fa-calendar mr-2.5"></i><span className='text-[13px]  text-[#beb8c3] font-bold'>Created Monday, January 26, 2026 at 11:00 PM</span>
                        </div>
                        {folder ?  
                            <div className='bg-[#754797] rounded-2xl px-[13px] py-1.5 '>
                            <i class="fa-regular fa-folder text-[#beb8c3] mr-2.5"></i><span className='text-[13px]  font-bold'>Folder</span>
                        </div>
                        : 
                        folder
                        }
                        
                    </div>
                    <div className='bg-[#754797] h-[0.5px] mb-4'></div>
                    <div className='overflow-y-auto flex-1 min-h-0'>
                        <h2 className=' text-amber-50 text-lg whitespace-pre-wrap'>{note.content || "No content yet..."}</h2>

                    </div>
              </div>
            
            
            
        </div>
            
        

    )
}
