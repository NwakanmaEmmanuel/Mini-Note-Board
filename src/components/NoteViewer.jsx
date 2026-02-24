import React from 'react'


export default function NoteViewer() {






     return (
    <div className='absolute inset-0 bg-amber-800 left-[20%] top-[30%] p-6 rounded-[10px] w-[510px] h-[211px]'>
        <div>
            <h1> Title </h1>
            <div>
                <button>
                    <i onClick={() => handleEditClick(note)} className="fa-regular fa-pen-to-square text-[13px] font-extrabold p-2 border border-[#44609e] rounded-md cursor-auto text-[#a1adca] bg-[#3f4773] hover:text-black"></i>               
                    <p>Edit</p>
                </button>
                <button>
                    <i onClick={() => handleDeleteNote(note.id)} className="fa-solid fa-trash-can text-[13px] font-extrabold p-2 border border-[#903e4e] rounded-md cursor-auto text-[#ffe2e2] bg-[#61303b] hover:text-black"></i>
                    <p>Delete</p>
                </button>
            </div>
            
        </div>
            

        <div>
            <p></p>
            <span className='h-1 text-blue-600'></span>
            <h2>Content</h2>
        </div>
    </div>
  )
}
