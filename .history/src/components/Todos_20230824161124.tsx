"use client"

import React, { useEffect, useState } from 'react'
import { UserParams, TodoParams } from '@/types'



function Todos({user}: {user: UserParams}, {todos}: {todos: TodoParams }) {
  const [userL, setUserL] = useState({})
  const [todosL, setTodosL] = useState({})
  useEffect(()=>{
    setUserL(user)
    setTodosL(todos)
  })    
  return (
    <div>
        <button onClick={()=>{
          console.log(todos)
        }}>get user</button>
        <div>{user.username}</div>
    </div>
  )
}

export default Todos