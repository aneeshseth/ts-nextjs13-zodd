"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function SP() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  async function handleSignup() {
    try {
        await axios.post("/api/users/signup", {
            username, password
        })
        router.push("/login")
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <div>
        <input placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} style={{color: "black"}}></input>
        <input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{color: "black"}}></input>
        <button onClick={handleSignup}>sign up</button>
    </div>
  )
}

export default SP