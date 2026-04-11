
/*rafce - React functional Component Export */

import React, { useState } from 'react'
import '../styles/form.scss'
import { Link } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'


const Register = () => {
    const [username, setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { user, loading, handleRegister } = useAuth()
    
        const navigate = useNavigate()
    
        if(loading)
        {
            return (
                <main>
                    <h1>Loading...</h1>
                </main>
            )
        }

    async function handleSubmit(e){
        e.preventDefault()

        await handleRegister(username, email, password)
        .then(res =>{
            console.log(res)
            navigate('/')
        })
    }

  return (
    <main>
        <div className='form-contianer'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onInput={(e)=>{setUsername(e.target.value)}}
                type="text"
                name = 'username'
                placeholder='Enter your Username' />

                <input 
                onInput={(e)=>{setEmail(e.target.value)}}
                type="text" 
                name='email'
                placeholder='Enter your Email' />
                
                <input onInput={(e)=>{setPassword(e.target.value)}}
                type="text" 
                name='password'
                placeholder='Enter Password' />
                
                <button className='button primary-button' type='submit'>Register</button>
            </form>
            <p>Already have an Account ? <Link className='toggleAuthForm' to="/login">Login</Link></p>
        </div>
    </main>
  )
}

export default Register
