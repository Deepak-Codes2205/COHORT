import React from 'react'

const Cards = (props) => {

    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)
    
  return (
    <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}}className='cards'>
      <h2>{props.elem.name}</h2>
    </div>
  )
}

export default Cards
