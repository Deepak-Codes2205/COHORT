import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementby10 } from '../redux/slices/counterSlice'

const Section = () => {

  const num = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (

    <div className='sec'>
      <div>
        <h1>{num}</h1>
      </div>
      <div className='buttonGroup'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementby10())}>Increment by 10</button>
      </div>
    </div>
  )
}

export default Section
