"use client"

import React, { useEffect, useState } from 'react'

interface UserData {
    username: string,
    password: string,
    _id: string
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
    </div>
  )
}

export default Todos