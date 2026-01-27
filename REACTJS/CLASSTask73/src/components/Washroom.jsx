import React from 'react'

const Washroom = (props) => {
    const color = props.gender==='Male' 
                    ? 'rgb(22, 15, 235)' 
                    : props.gender==='Female' 
                    ? 'rgb(235, 15, 187)' 
                    : 'rgba(207, 14, 241, 1)';
  return (
    <div style={{backgroundColor:color}}className='Wash'>{props.gender} Washroom</div>
  )
}

export default Washroom
