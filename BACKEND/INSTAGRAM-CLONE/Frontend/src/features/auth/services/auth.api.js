/** API Layer : We will just write how front end communicates with Backend ,we will not write the errors which should 
/*  appear on Frontend here in this file, this file will just tell what error has came on communicating with Backend
**/

import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true, 
})

export async function register(username, email, password)
{
    try{
        const response = await api.post("/register",{
            username,
            email,
            password
        })

        return response.data

    }catch (err){
        throw err
    }
}


export async function login(username, password)
{
    try{
        const response = await api.post("/login", {
            username,
            password
        })

        return response.data

    }catch (err){
        throw err
    }
}

export async function getMe()
{
    try{
        const response = await api.get("/get-me")

        return response.data

    }catch (err){
        throw err
    }
}
