import React, {useState} from 'react'

const AddEditNotes = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
  return (
    <>
    <div className='flex flex-col gap-2'>
        <label className='text-xs text-slate-400'>TITLE</label>
        <input
        type="text"
        className='text-2xl text-slate-950 outline-none'
        placeholder='Go To Gym At 5'
        value={title}
        />
    </div>

    <div className='flex flex-col gap-2 mt-4'>
        <label className='text-xs text-slate-400'>CONTENT</label>
        <textarea
        type="text"
        className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
        placeholder="Content"
        rows={10} />
    </div>

    <div className='mt-3'>
        <label className='input-label'>TAGS</label>
    </div>

    <button className='btn-primary font-medium mt-5 p-3' onClick={() => {}}>
        ADD
    </button>
    </>
  )
}

export default AddEditNotes