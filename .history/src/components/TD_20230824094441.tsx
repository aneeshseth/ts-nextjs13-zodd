import React from 'react'
import {cookies} from 'next/headers'
import Todos from './Todos'

async function getUser() {
  try {
    const nextCookies = cookies()
    const token = nextCookies.get('token')
    const res = await fetch("http://localhost:3002/api/users/user", {
     headers: {
      Authorization: `Bearer ${token?.value}`
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
  const user = await getUser()
  return (
    <>
    <div style={{color: "white"}}>{user.username}</div>
    </>
  )
}

