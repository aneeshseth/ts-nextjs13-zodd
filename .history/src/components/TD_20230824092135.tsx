import React from 'react'
import {cookies} from 'next/headers'

async function getTodos() {
  try {
    const nextCookies = cookies()
    const token = nextCookies.get('token')
    console.log(token)
    const res = await fetch("http://localhost:3002/api/users/user", {
     headers: {
      Authorization: `Bearer ${token}`
     },
     cache: "no-store"
    })
    if (!res.ok) throw new Error("failed to fetch data")
    return res.json();
  } catch (err) {
    console.log("hi error")
  }
}

export default async function TD() {
  await getTodos()
  return (
    <div>no idea</div>
  )
}

