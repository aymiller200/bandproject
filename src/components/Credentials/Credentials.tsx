import "./Credentials.css"

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Register from "./Register/Register";
import Login from "./Login/Login";
import { useContext, useState } from "react";
import { ErrorContext } from "../../contexts/ErrorContext";


const Credentials = () => {
  const [isAUser, setIsAUser] = useState(false)
  const errorContext = useContext(ErrorContext)

  const handleSwitch = (isSwitched: boolean) => {
    setIsAUser(isSwitched)
    errorContext.SetErrorObj(false, '')
  }

  return (
    <div className='credentials'>
      <h1>Band Plan </h1>
     <hr />
  
        <Login isAUser={isAUser}/> 
        <Register isAUser={isAUser}/>
  
      {isAUser ? 
       <p className='text'>Don't have an account? <span onClick={() => handleSwitch(false)}>Register here!</span></p> :
       <p className='text'>Already a user <span onClick={() => handleSwitch(true)}>sign-in here</span></p>}
       
      <div className='social--icons'>
        <div className='icon'>
          <FaGithub />
        </div>
        <div className='icon'>
          <FaLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Credentials