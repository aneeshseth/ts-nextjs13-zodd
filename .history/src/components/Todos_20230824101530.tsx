"use client"

import React, { useEffect, useState } from 'react'

function Todos({user}: any) {
  const [userL, setUserL] = useState({})
  useEffect(()=>{
    setUserL(user)
  })    
  return (
    <div>
        <button onClick={()=>{
          console.log(userL)
        }}>get user</button>
    </div>
  )
}

export default Todos