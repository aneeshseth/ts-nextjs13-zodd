"use client"

import React from 'react'

function Todos({user}: any) {
  return (
    <div>{user._id}</div>
  )
}

export default Todos