import React, { useState } from 'react'
import './index.css'
import Washroom from './components/Washroom'

const App = () => {
  const[gender, setGender]=useState('Male')
  const changeGender=() => {
    if(gender=='Male')
    {
      setGender('Female')
    }
    else if(gender=='Female')
    {
      setGender('Others')
    }
    else{
      setGender('Male')
    }
  }
  return (
    <div className='box'>
      <h3>Your gender is ~ {gender}</h3>
      <button onClick={changeGender}>Change</button>
      <Washroom gender={gender}/>
    </div>
  )
}

export default App
