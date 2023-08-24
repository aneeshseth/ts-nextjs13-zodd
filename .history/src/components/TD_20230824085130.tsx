import React from 'react'
import axios from 'axios'

async function getTodos() {
  return "hey"
}

export default async function TD() {
  const userTodos = await getTodos()
  return (
    <div>{userTodos}</div>
  )
}

