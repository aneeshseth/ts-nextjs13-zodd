"use client"
import React, { useState } from 'react'

function SP() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
        <input placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)}></input>
        <input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button>sign up</button>
    </div>
  )
}

export default SP