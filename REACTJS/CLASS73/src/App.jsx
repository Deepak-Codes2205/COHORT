import React, { useState } from 'react'
import './index.css'

const App = () => {
  const[num ,setNum] = useState(0)

  const incDigit= () => {
    setNum(num+1)
  }

  const decDigit = () => {
    /*
    if (num > 0) {
      setNum(num - 1)
    }*/
    setNum(num-1)
  }

  return (
    <div className='box'>
      <h1>{num}</h1>
      <div className='buttonbox'>
        <button onClick={incDigit}>Increase</button>
        <button onClick={decDigit}>Decrease</button>
      </div>
    </div>
  )
}

export default App
