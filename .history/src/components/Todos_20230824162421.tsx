"use client"

import React, { useEffect, useState } from 'react'
import { UserParams, TodoParams } from '@/types'



function Todos({user, todosList}: {user: UserParams, todosList: TodoParams[]}) {
  const [userL, setUserL] = useState({})
  const [todosL, setTodosL] = useState([])
  const [newTodo, setNewTodo] = useState("")
  useEffect(()=>{
    setUserL(user)
    setTodosL(todosList)
  },[])    
  return (
    <div>
        <div>Create Todo: </div>
        <input placeholder='todo' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button>submit</button>
        <div>{user.username}: </div>
        {todosL.map((todo: TodoParams)=>(
          <button>
            <div>{todo.description}</div>
          </button>
        ))}
    </div>
  )
}

export default Todos