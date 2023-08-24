"use client"

import React, { useEffect, useState } from 'react'
import { UserParams } from '@/types'



function Todos({user}: {user: UserParams}, {todos}: {todos: }) {
  const [userL, setUserL] = useState({})
  useEffect(()=>{
    setUserL(user)
  })    
  return (
    <div>
        <button onClick={()=>{
          console.log(userL)
        }}>get user</button>
        <div>{user.username}</div>
    </div>
  )
}

export default Todos