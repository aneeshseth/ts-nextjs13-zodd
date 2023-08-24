import React from 'react'

async function getTodos() {
  return "hey"
}

export default async function TD() {
  const userTodos = await getTodos()
  return (
    <div>{userTodos}</div>
  )
}

