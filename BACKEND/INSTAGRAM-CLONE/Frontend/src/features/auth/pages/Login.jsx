import React, { useState } from 'react'
import '../styles/form.scss'
import '../../shared/button.scss'
import { Link } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { user, loading, handleLogin } = useAuth()

    const navigate = useNavigate()

    if(loading)
    {
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    }

    const handleSubmit = async  (e)=>{

        e.preventDefault()

        await handleLogin(username, password)
        .then(res =>{
            console.log(res)
            navigate('/')
        })
    }

  return (
    <main>
        <div className='form-contianer'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onInput={ (e)=> { setUsername(e.target.value) } }
                type="text" 
                name= "username"
                id="username"
                placeholder="Enter Username or Email" /> 

                <input 
                onInput={ (e)=> { setPassword(e.target.value) } }
                type="text"
                name="password"
                id="password"
                placeholder="Enter Password" />

                <button className='button  primary-button' type='submit'>Login</button>
            </form>
            <p>Don't have an Account <Link className='toggleAuthForm' to="/register">Register</Link></p>
        </div>
    </main>
  )
}

export default Login
