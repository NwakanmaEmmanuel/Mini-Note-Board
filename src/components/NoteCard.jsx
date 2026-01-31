function NoteCard({ notes }) {


  
  
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

  let folder

  return (
    <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 basis-[76%] p-[110px] flex flex-wrap gap-4">
      {notes.map((note) => {
        const { dateStr, timeStr } = formatDate(note.createdAt);
        
        return (
          <div key={note.id}>
            <div className="p-[25px] w-[260px] flex flex-col border border-[#64428a] bg-transparent rounded-xl">
              <h2 className="text-xl text-white font-bold mb-2.5">{note.title}</h2>
              <div>
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash-can"></i>
              </div>
              <div className="text-xs text-[#9b8ba8] mt-auto">
                <div className="text-[13px] font-bold">{dateStr} {timeStr}</div>
                <div>{folder ? folder : <div className="mb-10"></div>}</div>
              </div>
              <p className="text-sm text-[#c5b9d0] ">{note.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NoteCard;