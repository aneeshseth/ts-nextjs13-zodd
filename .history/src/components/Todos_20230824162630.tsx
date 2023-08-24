"use client"

import React, { useEffect, useState } from 'react'
import { UserParams, TodoParams } from '@/types'
import axios from 'axios'



function Todos({user, todosList}: {user: UserParams, todosList: TodoParams[]}) {
  const [userL, setUserL] = useState({})
  const [todosL, setTodosL] = useState([])
  const [newTodo, setNewTodo] = useState("")
  useEffect(()=>{
    setUserL(user)
    setTodosL(todosList)
  },[])   
  async function createTodo() {
    const res = await axios.post("http://localhost:3002/api/appl/createTodos", {
      description: newTodo,
      
    })
  } 
  return (
    <div>
        <div>Create Todo: </div>
        <input placeholder='todo' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <button onClick={createTodo}>submit</button>
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