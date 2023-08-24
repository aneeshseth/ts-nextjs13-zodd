import React from 'react'

async function getTodos() {
  const response = await fetch("http://localhost:3002/api/users/user")
  if (!response.ok) throw new Error("failed to fetch data")
  console.log(response.json())
  return response.json();
}

export default async function TD() {
  const userTodos = await getTodos()
  return (
    <div>no idea</div>
  )
}

