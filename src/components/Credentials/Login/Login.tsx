import React, { FC, useState } from "react"
import { User } from "../../../helpers/User"

interface ILogin {
  UpdateToken:(newToken: string) => void
  Logout: () => void
}

const Login:FC<ILogin> = ({UpdateToken, Logout}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  
  const HandleLogin = async(e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5022/user/login', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          email: email.toUpperCase(), 
          password: password,
        })
      })
      const data: User = await res.json()
      if(data){
        setEmail(data.email)
        setPassword(data.password)
        UpdateToken(data.token)
        
      }
    } catch(error){
      setIsError(true)
    }
 
  }

  return(
    <form onSubmit={HandleLogin}>
      <input value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login