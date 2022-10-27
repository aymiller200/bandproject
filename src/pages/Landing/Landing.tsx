import { FC } from "react";
import Credentials from "../../components/Credentials/Credentials";

interface ILanding{
  UpdateToken:(newToken: string) => void
  Logout: () => void
}

const Landing:FC<ILanding> = ({UpdateToken, Logout}) => {

  return(
    <div>
      <Credentials UpdateToken={UpdateToken} Logout={Logout}/>
    </div>
  )
}

export default Landing