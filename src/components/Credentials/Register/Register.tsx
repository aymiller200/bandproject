import React, { FC, useState } from "react"
import { User } from "../../../helpers/User"

interface IRegister {
  UpdateToken: (newToken: string) => void
  Logout: () => void
}


const Register: FC<IRegister> = ({ UpdateToken, Logout }) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)

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
      const data: User = await res.json()

      setFirstName(data.firstName)
      setLastName(data.lastName)
      setEmail(data.email)
      setPassword(data.password)
      UpdateToken(data.token)

      console.log(data)

    } else {
      if (!password.match(regexPassword)) {
        setPasswordError(true)
      } else if (!email.match(regexEmail)) {
        setEmailError(true)
      }
    }

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