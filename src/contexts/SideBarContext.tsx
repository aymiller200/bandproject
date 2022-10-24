import React, { useState } from "react"
import  SideBar from "../components/SideBar/SideBar"

 interface ISideBarContext {
  children?: React.ReactNode
  isSideBarOpen?: boolean
  toggleSideBar?: () => void
}

const defaultState = {
  children: <SideBar />,
  isSideBarOpen: false
}

export const SideBarContext = React.createContext<ISideBarContext>(defaultState)

export const SideBarContextProvider = ({children}: ISideBarContext) => {
const [sideBarToggler, setSideBarToggler] = useState(defaultState.isSideBarOpen) 

  const toggleSideBar = () => {
    setSideBarToggler(!sideBarToggler)
  }


      return <SideBarContext.Provider value={{toggleSideBar}}>{children}</SideBarContext.Provider>
}
