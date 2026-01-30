

function NoteCard( {notes}) {

  const date = new Date();
  const day = date.getDate();              // 1-31
  
  const year = date.getFullYear();         // 2026
  const month = date.getMonth() + 1;       // 1-12 (0 is January, so +1)
  // const day = date.getDate();              // 1-31
  // const dayOfWeek = date.getDay();         // 0-6 (0 = Sunday)
  const hours = date.getHours();           // 0-23
  const minutes = date.getMinutes();       // 0-59
  // const seconds = date.getSeconds();
  // const hour = new Date().getHours();
  //   const openHour = 12;
  //   const closeHour = 22;
  //   const isOpen = hour >= openHour && hour <= closeHour;

  



  return (
    <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 basis-[76%] p-[110px]">
      {notes.map((note) => <div key={note.id}>
        <div className="p-[25px] w-[260px] flex flex-col border border-[#64428a] bg-transparent rounded-xl ">
          <h2 className="text-xl text-white font-bold mb-1">{note.title}</h2>
          <span className="text-sm text-[#c5b9d0] mb-1">{note.content}</span>
          <span>{month}</span>
          <span>{note.createdAt}</span>
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