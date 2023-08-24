import React from 'react'

async function getTodos() {
  try {
    const res = await fetch("http://localhost:3002/api/users/user", {
      cache: "no-store"
    })
    if (!res.ok) throw new Error("failed to fetch data")
    return res.json();
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

