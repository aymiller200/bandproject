import React, { useState, useContext, FC} from "react"
import { ErrorContext } from "../../../contexts/ErrorContext"
import { AuthUser, UserContext } from "../../../contexts/UserContext"
import { Error } from "../../Error/Error"
import './Login.css'

interface ILogin{
  isAUser: boolean
}

const Login: FC<ILogin> = ({isAUser}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userContext = useContext(UserContext)
  const errorContext = useContext(ErrorContext)

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
        errorContext.SetErrorObj(false, '')
        SetUser(data)
        setPassword(data.user.password)
        setEmail(data.user.email) 
      }
    } catch (error) {
      errorContext.SetErrorObj(true, 'Oops! Wrong email and/or password!')
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

  const SetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    errorContext.SetErrorObj(false, '')
  }

  const SetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    errorContext.SetErrorObj(false, '')
  }

  return (
    <form className={!isAUser ? 'login--form__hidden' : errorContext.error?.isError ? 'login--form__error' : 'login--form'} onSubmit={HandleLogin}>
      <input className='email' placeholder='Email Address' value={email || ''} onChange={SetEmail} />
      <input className='password' placeholder='Password' type='password' value={password || ''} onChange={SetPassword} />
      <div className={errorContext.error?.isError ? 'error' : 'error__hidden'}><Error /></div>
      <button className='login--button' type="submit">Sign in</button>
    </form>
  )
}

export default Login