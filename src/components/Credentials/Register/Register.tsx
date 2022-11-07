import React, { useContext, useState } from "react"
import { AuthUser, UserContext } from "../../../contexts/UserContext"

const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const userContext = useContext(UserContext)

  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
  const regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi

  const HandleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password.match(regexPassword) && email.match(regexEmail)) {
      const res = await fetch('http://localHost:5022/user/register', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        }),
      })
      const data: AuthUser = await res.json()
      SetUser(data)
      setFirstName(data.user.firstName)
      setLastName(data.user.lastName)
      setEmail(data.user.email)
      setPassword(data.user.password)

      console.log(data)

    } else {
      if (!password.match(regexPassword)) {
        setPasswordError(true)
      } else if (!email.match(regexEmail)) {
        setEmailError(true)
      }
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
    <div>
      <form onSubmit={HandleRegister}>
      <input placeholder='first' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder='last' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Register