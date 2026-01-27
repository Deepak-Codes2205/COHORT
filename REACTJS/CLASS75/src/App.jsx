import React, { useState } from 'react'
import Card from './components/Card'
const App = () => {
  const [userName, setUserName]= useState('')
  const [imgUrl, setImgUrl]= useState('')
  const [userRole, setUserRole]= useState('')
  const [userDesc, setUserDesc]= useState('')

  const[allUsers, setAllUsers] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    setAllUsers([...allUsers,{userName, imgUrl, userRole, userDesc}])
    setUserName('')
    setImgUrl('')
    setUserRole('')
    setUserDesc('')
  }

  const deleteHandler=(id)=>{
    const copyUsers= [...allUsers]
    copyUsers.splice(id,1)
    setAllUsers(copyUsers)
  }

  return (
    <div className='h-screen bg-black text-white p-6'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='px-2 py-2 flex flex-wrap'>
        <input 
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
        className='border-2 w-[48%] mt-6 ml-6 px-5 py-3 ' type='text' placeholder='Enter your name'>
        </input>

        <input 
        value={imgUrl}
        onChange={(e)=>{
          setImgUrl(e.target.value)
        }}
        className='border-2 w-[48%] mt-6 ml-4 px-5 py-3' type='text' placeholder='Enter image url'>
        </input>

        <input 
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        className='border-2 w-[48%] mt-4 ml-6 px-5 py-3' type='text' placeholder='Enter your role'>
        </input>

        <input 
        value={userDesc}
        onChange={(e)=>{
          setUserDesc(e.target.value)
        }}
        className='border-2 w-[48%] mt-6 ml-4 px-5 py-3' type='text' placeholder='Enter description'>
        </input>

        <button className='border-none w-[30%] mt-10 ml-[50%] -translate-x-[50%] px-5 py-3 bg-emerald-700'>Create User</button>
      </form>
      <div className='px-4 py-10 gap-4 flex flex-wrap'>
        {allUsers.map(function(elem,id){
          return <Card key={id} id={id} elem={elem} deleteHandler={deleteHandler}/>
        })}
      </div>
    </div>
  )
}

export default App
