import React from 'react'

function LG() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
    <input placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} style={{color: "black"}}></input>
    <input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{color: "black"}}></input>
    <button onClick={handleSignup}>sign up</button>
</div>
  )
}

export default LG