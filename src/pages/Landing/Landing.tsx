import { FC, useContext } from "react";
import Credentials from "../../components/Credentials/Credentials";
import { UserContext } from "../../contexts/UserContext";

// interface ILanding{
//   UpdateToken:(newToken: string) => void
//   Logout: () => void
// }

const Landing = () => {
  
  
  return (
    <div>
   <Credentials />
    </div>
  )
}

export default Landing