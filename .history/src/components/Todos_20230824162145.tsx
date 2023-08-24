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
        <div>{user.username}</div>
        {todosL.map((todo: any)=>(
          <div>{todo.description}</div>
        ))}
    </div>
  )
}

export default Todos