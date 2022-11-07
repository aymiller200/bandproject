import React, { useState, useContext} from "react"
import { AuthUser, UserContext } from "../../../contexts/UserContext"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const [loginToken, setLoginToken] = useState('')
  const userContext = useContext(UserContext)

  const HandleLogin = async (e: React.FormEvent) => {
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
      const data: AuthUser = await res.json()
      if (data) {
        SetUser(data)
        setIsError(false)
        setLoginToken(data.token)
        setPassword(data.user.password)
        setEmail(data.user.email) 
       
      } else {
        console.log("no data ", res)
      }
    } catch (error) {
      setIsError(true)
    }
  }

  const SetUser = (data: AuthUser) => {
    // add . user to fix response type
    userContext.setUser({
      user: {
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        password: data.user.password,
      },
      token: data.token
    })
    userContext.setToken(data.token)
    userContext.UpdateToken(data.token)
     
  }

  return (
    <form onSubmit={HandleLogin}>
      <input value={email || ''} onChange={(e) => setEmail(e.target.value)} />
      <input value={password || ''} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login