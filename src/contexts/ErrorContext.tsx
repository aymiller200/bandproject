import React, { useState, createContext, useEffect } from 'react'

export type Error = {
  isError: boolean
  errorMessage: string, 
}

type ErrorContextProviderProps = {
  children: React.ReactNode
}

type ErrorContextType = {
    error: Error | null | undefined,
    setError: React.Dispatch<React.SetStateAction<Error | null | undefined>>
    SetErrorObj: (isErr: boolean, errMsg:string) => void
}


export const ErrorContext = createContext({} as ErrorContextType)
export const ErrorContextProvider = ({ children }: ErrorContextProviderProps) => {
  const [error, setError] = useState<Error | null>()

  const SetErrorObj = (isErr: boolean, errMsg: string) => {
      setError({
        isError: isErr, 
        errorMessage: errMsg
      })
  }

  return <ErrorContext.Provider value={{error, setError, SetErrorObj}}>{children}</ErrorContext.Provider>
}
