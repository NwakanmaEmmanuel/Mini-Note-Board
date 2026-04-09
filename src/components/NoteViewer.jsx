import  { useState } from 'react'


export default function NoteViewer( {note ,setSelectedNote, handleUpdateNote ,folders, handleDeleteNote } ) {

    

    const [isEditing, setIsEditing] = useState()
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedContent, setEditedContent] = useState(note.content);

    const handleEditClick = () => {
        setIsEditing(true)
    }
    
    // const handleSaveEdit = (noteId) => {
    //     handleUpdateNote(noteId, editedTitle, editedContent)
    //     setIsEditing(false)
    // }

    // const handleCancelEdit = () => {
    //     setEditedTitle('')
    //     setEditedContent("")
    //     setIsEditing(false)
    // }
    const handleSaveEdit = () => {
        handleUpdateNote(note.id, editedTitle, editedContent)
        setIsEditing(false)
    }

    const handleCancelEdit = () => {
        setEditedTitle(note.title) // Reset to original
        setEditedContent(note.content) // Reset to original
        setIsEditing(false)
    }
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        
        const shortMonth = date.toLocaleString("en-US", { month: "long" });
        const day = date.getDate();
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedMinutes = minutes.toString().padStart(2, '0');
        
        return {
        dateStr: `${dayName}, ${shortMonth} ${day}, ${year}`,
        timeStr: `${formattedHours}:${formattedMinutes} ${ampm}`
        };
    }

        const { dateStr, timeStr } = formatDate(note.updatedAt);
        const noteFolder = folders?.find(f => f.id === note.folderId);




    return (
        // adding modal class
        <div
            onClick={() => setSelectedNote(null)}
            className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className=' bg-linear-to-br from-[#763ea0] via-[#571788] to-[#331b58]  border border-[#754797] max-h-[80vh] w-full max-w-[510px] mx-4  text-amber-50  p-6 rounded-[10px]  flex flex-col gap-2.5'
            onClick={(e) => e.stopPropagation()} >

            
                <div  className='flex  justify-between mb-2.5'>
                    {isEditing ? (
                    <input 
                        type="text"
                        className="text-white outline-0 border-[#7e7885] border-4 w-[280px] py-[7px] text-[13px] px-2.5 rounded-lg  bg-[#705095]"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        autoFocus/>
                    ) : (
                    <h1 className='text-3xl font-bold' >{ editedTitle || "Untitled Note"}</h1>

                    )}
                    <button onClick={() => setSelectedNote(null)} className=' absolute  top-2 right-3 text-[17px] font-bold text-lg   hover:scale-[1.3] '>&times;</button>
                    <div  className='flex gap-1.5  justify-center'>
                        {isEditing ? (
                        <button onClick={handleSaveEdit} className='flex items-center border-[1.5px] bg-[#123d23] border-[#055826] px-2.5  rounded-md hover:bg-[#16482a] cursor-auto '>
                            <i className="fa-solid fa-check text-white text-[13px] mr-3 font-light "></i>
                            <p>Save</p>
                        </button>
                        
                        ) : (
                        <button onClick={handleEditClick}  className='flex gap-2 items-center px-4 border border-[#44609e] rounded-md cursor-auto text-[#a1adca] bg-[#3f4773] hover:bg-[#414f9b] ' >
                            <i className="fa-regular fa-pen-to-square  text-[13px] font-extrabold  hover:text-black"></i>               
                            <p>Edit</p>
                        </button>
                        )}
                        {isEditing ? (
                        <button onClick={ handleCancelEdit}  className='flex  items-center   text-[14px] font-medium px-2.5 bg-[#451f73] rounded-md  border-[1.5px]  border-[#745b91] hover:bg-[#593880]  '>
                            <i className="fa-solid fa-x text-white mr-3  text-[13px] font-light "></i>
                            <p>Cancel</p>
                        </button>
                        
                        ) : (
                        <button onClick={() => {  handleDeleteNote(note.id); setSelectedNote(null)}} className='flex gap-2 ml-[18px] px-4 items-center  border border-[#aa4a5d] rounded-md cursor-auto text-[#ffe2e2] bg-[#692432] hover:bg-[#892237]'>
                            <i className="fa-solid fa-trash-can text-[13px] font-extrabold "></i>
                            <p>Delete</p>
                        </button>
                        )}
                        
                        
                    </div>    
                </div>
                

                    <div className='flex gap-[23px]  mb-4 items-center'>
                        <div className='bg-[#754797] rounded-2xl px-[13px] py-1.5'>
                            <i className="fa-regular fa-calendar mr-2.5"></i><span className='text-[13px]  text-[#beb8c3] font-bold'>Created {dateStr} at {timeStr}</span>
                        </div>
                         {noteFolder &&
                            // <div className='bg-[#754797] rounded-2xl px-[13px] py-1.5 '>Monday, January 26, 2026 at 11:00 PM 

                        <div className='bg-linear-to-br from-[#763ea0] via-[#571788] to-[#331b58] px-3.5 py-1.5 border rounded-[19px]  text-[#beb8c3]'>
                            <i class="fa-regular fa-folder text-[#beb8c3] text-[14px] mr-2.5"></i><span className='text-[12px]  font-bold'>{noteFolder.name}</span>
                        </div>}
                        
                    </div>
                    <div className='bg-[#754797] h-[0.5px] mb-4'></div>
                    <div className='overflow-y-auto flex-1 min-h-0'>
                        {isEditing ? (
                        <textarea 
                            type="text"
                            className=" text-white bg-[#705095] border-[#bfbdc1] w-full border-[0.1px] resize-none h-[358px]  outline-amber-50 py-[7px] text-[13px] px-2.5 rounded-lg -sizing-content"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}                  
                        />
                        ) : (
                        <h2 className=' text-amber-50 text-lg whitespace-pre-wrap'>{editedContent || "No content yet..."}</h2>

                        )}
                    </div>
              </div>
            
            
            
        </div>
            
        

    )
}
