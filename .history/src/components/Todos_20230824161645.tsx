"use client"

import React, { useEffect, useState } from 'react'
import { UserParams, TodoParams } from '@/types'



function Todos({user, todosList}: {user: UserParams, todosList: TodoParams[]}) {
  const [userL, setUserL] = useState({})
  const [todosL, setTodosL] = useState([])
  useEffect(()=>{
    setUserL(user)
    setTodosL(todosList)
  },[])    
  return (
    <div>
        <button onClick={()=>{
          console.log(todosList)
        }}>get user</button>
        <div>{user.username}</div>
    </div>
  )
}

export default Todos