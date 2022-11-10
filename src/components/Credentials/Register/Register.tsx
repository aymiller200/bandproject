import './Register.css'

import React, { FC, useContext, useState } from "react"
import { AuthUser, UserContext } from "../../../contexts/UserContext"
import { ErrorContext } from '../../../contexts/ErrorContext'
import { Error } from '../../Error/Error'

interface IRegister {
  isAUser: boolean
}

const Register: FC<IRegister> = ({ isAUser }) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userContext = useContext(UserContext)
  const errorContext = useContext(ErrorContext)

  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
  const regexEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi

  const HandleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password.match(regexPassword) && email.match(regexEmail)) {
      errorContext.SetErrorObj(false, '')
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


    } else {
      if (!password.match(regexPassword)) {
        errorContext.SetErrorObj(true, "Password must be 8 characters long and include a capital letter, a number, and a symbol")
        setPassword('')
      } else if (!email.match(regexEmail)) {
        errorContext.SetErrorObj(true, "Email must be in email format: example@email.com")
        setEmail('')
      }
    }

  }

  const SetUser = (data: AuthUser) => {
    // add . user to fix response type
    if(data){
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
    else{
      return
    }
  }

  const SetFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value)
     errorContext.SetErrorObj(false, '')
  }

  const SetLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
    errorContext.SetErrorObj(false, '')
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

    <form className={isAUser ? 'register--form__hidden' : errorContext.error?.isError ? 'register--form__error' : 'register--form'} onSubmit={HandleRegister}>
      <input className='first' type='text' placeholder='First Name' value={firstName} onChange={SetFirst} />
      <input className='last' type='text' placeholder='Last Name' value={lastName} onChange={SetLast} />
      <input className='email' placeholder='Email Address' value={email} onChange={SetEmail} />
      <input className='password' type='password' placeholder='Password' value={password} onChange={SetPassword} />
      <div className={errorContext.error?.isError ? 'error' : 'error__hidden'}><Error /></div>
      <button className='register--button' type='submit'>Sign-up</button>
    </form>

  )
}

export default Register