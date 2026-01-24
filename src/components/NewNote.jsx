



export default function NewNote() {
  return (
    <div className="bg-[#2e203c] w-[520px] right-[600px] top-[5px] h-[330px] p-7 absolute rounded-xl ">
      <h1 className="text-white text-2xl font-bold">Create New Note</h1>
      <label>Create a new note with an optional title, content, and folder organization.</label>
      <input type="text" className="bg-[#3f3848]" placeholder="Note title... " />
      <textarea name="" className="bg-[#3f3848]"></textarea>
    </div>
  )
}
