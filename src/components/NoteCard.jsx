

function NoteCard( {notes}) {
  return (
    <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 basis-[76%] p-[110px]">
      {notes.map((note) => <div key={note.id}>
        <div className="bg-red-300 p-[25px] w-[260px] flex flex-col">
          <p>{note.title}</p>
          <span>{note.content}</span>
        </div>
      </div>)}
    </div>
  )
}

export default NoteCard







// function NoteCard( {notes}) {
//   return (
//     <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 basis-[76%] p-[110px]">
//       {notes.map((note) => <div key={note.id}>
//         <div className="bg-red-300 p-[25px] w-[260px] flex flex-col">
//           <p>{note.title}</p>
//           <span>{note.content}</span>
//         </div>
//       </div>)}
//     </div>
//   )
// }

// export default NoteCard