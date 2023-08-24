"use client"

import React, { useEffect, useState } from 'react'
import { UserParams } from '@/types'

interface UserData {
    username: string,
    password: string,
}

function Todos({user}: {user: UserData}) {
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