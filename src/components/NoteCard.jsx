import NewNote from "./NewNote";

function NoteCard({ notes, setShowBox, showBox, addNewNote, handleDeleteNote }) {


  
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    
    const shortMonth = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    return {
      dateStr: `${shortMonth} ${day},`,
      timeStr: `${formattedHours}:${formattedMinutes} ${ampm}`
    };
  }

  // To Implement Folder
  let folder

  return (
    <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 basis-[76%] p-[97px] flex-1 overflow-y-auto flex flex-wrap gap-4 relative">
      {notes.map((note) => {
        const { dateStr, timeStr } = formatDate(note.createdAt);
        
        return (
          <div key={note.id}>
            <div className=" group p-[25px] w-[270px] flex flex-col border border-[#64428a] bg-transparent rounded-xl relative cursor-pointer">
              <h2 className="text-xl text-white font-bold mb-2.5">{note.title}</h2>
              <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-200  absolute right-[17px] top-[55px] flex items-center justify-center gap-[11px]  ">
                <i className="fa-regular fa-pen-to-square text-[12px] p-2 border border-[#44609e] rounded-md text-[#a1adca] bg-[#3f4773]"></i>
                <i onClick={() => handleDeleteNote(note.id)} className="fa-solid fa-trash-can text-[12px] p-2 border border-[#903e4e] rounded-md text-[#ffe2e2] bg-[#613044]"></i>
              </div>
              <div className="text-xs text-[#9b8ba8] mt-auto">
                <div className="text-[12px] font-bold">{dateStr} {timeStr}</div>
                <div>{folder ? folder : <div className="mb-10"></div>}</div>
              </div>
              <p className="text-sm text-[#c5b9d0] ">{note.content}</p>
            </div>
          </div>
        );
      })}
      {showBox &&  <NewNote setShowBox={setShowBox} addNewNote={addNewNote} notes={notes} />}
      <button  onClick={() => setShowBox(true)}  className="px-7 py-5 rounded-full text-2xl text-white border border-[#088ddf] fixed right-[11px] bottom-[45px] bg-linear-to-r from-[#9641dd] via-[#5465da] to-[#078eb2] ">+</button>

    </div>
  );
}

export default NoteCard;