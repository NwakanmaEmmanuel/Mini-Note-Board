import NewNote from "./NewNote";
import { useState } from "react";

function NoteCard({ notes, setShowBox, showBox, addNewNote, handleDeleteNote, handleUpdateNote }) {


  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");


  const handleEditClick = (note) => {
    setEditingNoteId(note.id)
    setEditedTitle(note.title)
    setEditedContent(note.content)
  }

  const handleSaveEdit = (noteId) => {
    handleUpdateNote(noteId, editedTitle, editedContent)
    setEditingNoteId(null)
    setEditedTitle('')
    setEditedContent("")
  }

  const handleCancelEdit = () => {
    setEditingNoteId(null)
    setEditedTitle('')
    setEditedContent("")
  }
  
  
  
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
        const { dateStr, timeStr } = formatDate(note.updatedAt);
          const isEditing = editingNoteId === note.id

        
        return (
          <div key={note.id}>
            <div className=" group p-[25px] w-[270px] flex flex-col border border-[#64428a] bg-transparent rounded-xl relative cursor-pointer">
                {isEditing ? (
                  <input 
                    type="text"
                    className="text-white outline-0 border-[#7e7885] border-4 py-[7px] text-[13px] px-2.5 rounded-lg mb-2.5 bg-[#451f73]"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    autoFocus/>
                ) : (
                <h2 className="text-xl text-white font-bold mb-2.5">{note.title || "Untitled Note"}</h2>)
                }
              
              <div className=" opacity-0 group-hover:opacity-100 transition-opacity duration-200  absolute right-[17px] top-[55px] flex items-center justify-center gap-[11px]  ">
                {isEditing ? (
                  <i onClick={() => handleSaveEdit(note.id)} className="fa-solid fa-check text-white p-2.5 bg-[#123d23] rounded-md text-[9px] cursor-auto border-[1.5px] border-[#055826] hover:text-[#1d0707] hover:bg-[#16482a]"></i>
                ) : (
                <i onClick={() => handleEditClick(note)} className="fa-regular fa-pen-to-square text-[13px] p-2 border border-[#44609e] rounded-md cursor-auto text-[#a1adca] bg-[#3f4773] hover:text-[#1d0707]"></i>
                 )}

                 {isEditing ? (
                  <i onClick={handleCancelEdit} className="fa-solid fa-x text-white p-2.5 bg-[#451f73] rounded-md text-[9px] cursor-auto border-[1.5px] border-[#745b91] hover:text-[#1d0707] hover:bg-[#593880]"></i>
                ) : (
                <i onClick={() => handleDeleteNote(note.id)} className="fa-solid fa-trash-can text-[13px] p-2 border border-[#903e4e] rounded-md cursor-auto text-[#ffe2e2] bg-[#61303b] hover:text-[#1e0808]"></i>
                 )}
              </div>
              <div className="text-xs text-[#9b8ba8] mt-auto top-[76px]">
                <div className="text-[12px] font-bold">{dateStr} {timeStr}</div>
                <div>{folder ? folder : <div className="mb-10"></div>}</div>
              </div>
              {isEditing ? (
                  <textarea 
                    type="text"
                    className=" text-white outline-1 outline-amber-50 py-[7px] text-[13px] px-2.5 rounded-lg bg-[#451f73]"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}                  
                    />
                ) : (
                <p className="text-sm text-[#c5b9d0] ">{note.content || "No content yet..."}</p>)
                }
              
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