import React from 'react'

async function getTodos() {
  try {
    const response = await fetch("http://localhost:3002/api/users/user")
    console.log(response)
    if (!response.ok) throw new Error("failed to fetch data")
    return response.json();
  } catch (err) {
    console.log("hi error")
  }
 
}

export default async function TD() {
  const {userTodos} = await getTodos()
  return (
    <div>no idea</div>
  )
}

