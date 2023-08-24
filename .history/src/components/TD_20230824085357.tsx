import React from 'react'
import axios from 'axios'

async function getTodos() {
  const response = await axios.get("/api/users/user")
  const data = await response.data;
  console.log(data)
  return data;
}

export default async function TD() {
  const userTodos = await getTodos()
  return (
    <div>no idea</div>
  )
}

