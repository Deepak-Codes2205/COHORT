import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const [notes, setnotes] = useState([])
  const [editNoteId, setEditNoteId] = useState(null)
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")

  function fetchNotes(){
    axios.get('http://localhost:3000/api/notes')
    .then((res)=>{
      console.log(res.data) 
      setnotes(res.data.notes)
    })
  }
  
  useEffect(()=>{
    fetchNotes()
  },[])

function handleSubmit(e){
  e.preventDefault()

  const {title, description} = e.target.elements
  
  axios.post("http://localhost:3000/api/notes",{
    title: title.value,
    description: description.value
  })
  .then(res=>{
    console.log(res.data)
    fetchNotes()
  })
}

function handleDeleteNote(noteId){
  axios.delete("http://localhost:3000/api/notes/"+noteId)
  .then(res=>{
    console.log(res.data)
    fetchNotes()
  })
}

function handleEditClick(note){
    setEditNoteId(note._id)
    setEditTitle(note.title)
    setEditDescription(note.description)
  }

  function handleUpdateNote(noteId){
    axios.patch("http://localhost:3000/api/notes/" + noteId, {
      title: editTitle,
      description: editDescription
    })
    .then(res=>{
      console.log("Updated Successfully")
      setEditNoteId(null)
      fetchNotes()
    })
  }

  return (
    <>
    <form className='note-create-form' onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder='Enter the tltle'/>
      <input name="description" type="text" placeholder='Enter description'/>
      <button>Create Note</button>
    </form>
    <div className = "Notes">
      {
        notes.map(note=>{
          return(
          <div className='Note' key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button onClick={()=> {handleDeleteNote(note._id)}}>Delete</button>
            <button onClick={() => {handleEditClick(note)}}>Edit</button>

            {
              editNoteId === note._id && (
                <div>
                  <input value={editTitle} type="text"  placeholder='Edit title' onChange={(e)=>{setEditTitle(e.target.value)}}/>
                  <input value={editDescription} type="text" placeholder='Edit description' onChange={(e)=>{setEditDescription(e.target.value)}}/>
                  <button onClick={() => { handleUpdateNote(note._id) }}>Save</button>
                  <button onClick={() => { setEditNoteId(null) }}>Cancel</button>
                </div>
              )
            }
          </div>
          )
        })
      }
    </div>
  </>
  )
}

export default App
