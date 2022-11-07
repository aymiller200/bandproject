import React, { useState, createContext, useEffect } from 'react'

export type AuthUser = {
  user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  }
  token: string
}

type UserContextProviderProps = {
  children: React.ReactNode
}

type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
  token: string | null,
  setToken: React.Dispatch<React.SetStateAction<string>>
  UpdateToken: (newToken: string) => void

}

export const UserContext = createContext({} as UserContextType)
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const existing: string = localStorage.getItem('token') || "";
  const [token, setToken] = useState(existing)

  useEffect(() => { console.log("token change in context: ", token) }, [token]
  )

  const UpdateToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
  }

  return <UserContext.Provider value={{ user, setUser, token, setToken, UpdateToken }}>{children}</UserContext.Provider>
}
