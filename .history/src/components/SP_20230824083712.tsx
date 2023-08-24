"use client"
import React, { useState } from 'react'
import axios from 'axios'

function SP() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  async function handleSignup() {
    const response = await axios.post("/api/users/signup", {
        username, password
    })
  }
  return (
    <div>
        <input placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)}></input>
        <input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={handleSignup}>sign up</button>
    </div>
  )
}

export default SP