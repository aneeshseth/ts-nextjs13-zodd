"use client"

import React, { useEffect, useState } from 'react'
import { UserParams } from '@/types'



function Todos({user}: {user: UserParams}) {
  const [userL, setUserL] = useState({})
  useEffect(()=>{
    setUserL(user)
  })    
  return (
    <div>
        
        <div>{user.username}</div>
    </div>
  )
}

export default Todos