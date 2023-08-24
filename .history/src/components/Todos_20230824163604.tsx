"use client"

import React, { useEffect, useState } from 'react'
import { UserParams, TodoParams } from '@/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'



function Todos({user, todosList}: {user: UserParams, todosList: TodoParams[]}) {
  const [userL, setUserL] = useState<UserParams>({})
  const [todosL, setTodosL] = useState<TodoParams[]>([])
  const [newTodo, setNewTodo] = useState("")
  const router = useRouter()
  useEffect(()=>{
    setUserL(user)
    setTodosL(todosList)
  },[])   
  async function createTodo() {
    const res = await axios.post("http://localhost:3002/api/appl/createTodos", {
      description: newTodo,
      user: userL._id
    })
    const data = await res.data;
    setTodosL((prevTodos) => [...prevTodos, data.msg]);
    router.refresh()
  } 
  return (
    <div>
        <div>Create Todo: </div>
        <input placeholder='todo' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} style={{color: "black"}}/>
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