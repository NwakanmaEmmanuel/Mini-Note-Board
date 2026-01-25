import { useState } from "react"
import NewNote from "./NewNote";

function Main({addNewNote, notes}) {

    const [showBox, setShowBox] = useState(false);

  return (


    <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 h-[547px]  shadow-xl backdrop-blur-lgp-10 flex items-center justify-center relative">

        <div className="p-14 bg-linear-to-br  via-purple-900 to-slate-900  shadow-xl backdrop-blur-lgp-10 w-120 rounded-3xl border border-[#4b455c] m-10 items-center flex flex-col justify-center">

            <div className="text-7xl mb-6 relative animate-[moveUpDown_2s_ease-in-out_infinite_alternate] ">📝</div>
            <h1 className="text-4xl font-bold text-white mb-4.5">Start Writing</h1>
            <p className="font-medium text-xl text-[#f3e9ff] mb-5.5">Your thoughts deserve a beautiful home</p>
            <button onClick={() => setShowBox(true)} className=" group p-3 mb-[17px] bg-blue-500 text-white text-xl font-bold rounded-[18px] transform transition hover:scale-105 active:scale-95 bg-linear-to-br from-[#9641dd] via-[#5465da] to-[#078eb2]  ">
                <span className="mr-[15px] inline-block transform transition group-hover:rotate-180 duration-700">+</span> Create Your First Note <span className="text-white ml-[15px]">✨</span>
            </button>
            <p className="text-[#8b7d99] ">Press Escape to close • Click anywhere to start</p>

        {showBox &&  <NewNote setShowBox={setShowBox} addNewNote={addNewNote} notes={notes} />}

        </div>

    </div>
  )
}

export default Main