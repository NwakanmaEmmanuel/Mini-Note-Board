import { useState } from "react"

export default function FolderTab({ folder, setSelectedFolder, notes }) {

  return (
    // <div className="p-14 bg-red-600 shadow-xl   rounded-3xl border border-[#4b455c] m-10 flex flex-col">

      <div className="p-14 bg-linear-to-br  via-purple-900 to-slate-900  shadow-xl backdrop-blur-lgp-10 w-120 rounded-3xl border border-[#4b455c] m-10 items-center flex flex-col justify-center">
      
        <div className="text-7xl mb-6 relative ">📁</div>
        <h1 className="text-4xl font-bold text-white mb-4.5">Empty Folder</h1>
        <p className="font-medium text-xl text-center text-[#f3e9ff] mb-5.5">
          <span className="text-[#8abbf5]">"{folder.name}"</span> has no notes yet</p>
        <button className=" group p-3 mb-[17px] bg-blue-500 text-white text-xl font-bold rounded-[18px] transform transition hover:scale-105 active:scale-95 bg-linear-to-r from-[#9641dd] via-[#5465da] to-[#078eb2]  ">
            <span className="mr-[15px] inline-block">+</span> Create Your First Note <span className="text-white ml-[15px]">✨</span>
        </button>
       </div>
    // </div>
  )
}