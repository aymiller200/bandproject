import './Error.css'

import { useContext } from "react"
import { ErrorContext } from "../../contexts/ErrorContext"

export const Error = () => {
  const errorContext = useContext(ErrorContext)

  return(
    <div className='error--container'>{errorContext.error?.isError ? <p>{errorContext.error.errorMessage}</p> : null}</div>
  )
}