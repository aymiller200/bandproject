import Register from "./Register/Register";
import Login from "./Login/Login";
import { FC } from "react";

interface ICredentials{
  UpdateToken:(newToken: string) => void
  Logout: () => void
}

const Credentials:FC<ICredentials> = ({UpdateToken, Logout}) => {
  return(
    <div>
      <Register UpdateToken={UpdateToken} Logout={Logout}/>
      <Login UpdateToken={UpdateToken} Logout={Logout}/>
    </div>
  )
}

export default Credentials