import React from 'react'


export default function NoteViewer() {




    let folder 

     return (
    <div className='absolute inset-0 bg-amber-800 text-amber-50 left-[20%] top-[30%] p-6 rounded-[10px] w-[510px] h-[211px] flex flex-col gap-2.5'>
        <div className='flex justify-between mb-2.5'>
            <h1 className='text-3xl font-bold' >Untitled Note </h1>
            <div  className='flex'>
                <button className='flex gap-2 items-center px-4 border border-[#44609e] rounded-md cursor-auto text-[#a1adca] bg-[#3f4773] ' >
                    <i onClick={() => handleEditClick(note)} className="fa-regular fa-pen-to-square text-[13px] font-extrabold  hover:text-black"></i>               
                    <p>Edit</p>
                </button>
                <button  className='flex gap-2 ml-[18px] px-4 items-center  border border-[#aa4a5d] rounded-md cursor-auto text-[#ffe2e2] bg-[#692432]'>
                    <i onClick={() => handleDeleteNote(note.id)} className="fa-solid fa-trash-can text-[13px] font-extrabold hover:text-black"></i>
                    <p>Delete</p>
                </button>
            </div>
            
        </div>
            

        <div>
            <div className='flex gap-[23px]  mb-4'>
                <div className='bg-blue-800 rounded-2xl px-[13px] py-1.5'>
                    <i className="fa-regular fa-calendar mr-2.5"></i><span className='text-[13px]  font-bold'>Created Monday, January 26, 2026 at 11:00 PM</span>
                </div>
                {folder ?  
                     <div className='bg-blue-800 rounded-2xl px-[13px] py-1.5 '>
                    <i class="fa-regular fa-folder mr-2.5"></i><span className='text-[13px]  font-bold'>Folder</span>
                </div>
                : 
                   folder
                }
                
            </div>
            <p className='bg-amber-200 h-[0.1px] mb-[27px]'></p>
            <h2 className='text-lg'>Content</h2>
        </div>
    </div>
  )
}
