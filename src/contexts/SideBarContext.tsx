import React, { useRef, useState } from "react"

interface ISideBarContext {
  children?: React.ReactNode
  isSideBarOpen?: boolean
  toggleSideBar?: () => void
}

const defaultState = {
  isSideBarOpen: false
}

export const SideBarContext = React.createContext<ISideBarContext>(defaultState)

export const SideBarContextProvider = ({ children }: ISideBarContext) => {
  const [sideBarToggler, setSideBarToggler] = useState(defaultState.isSideBarOpen)
  const ref = useRef(sideBarToggler).current

  const toggleSideBar = () => {
    setSideBarToggler(true)
  }

  return(
  <SideBarContext.Provider value={{ isSideBarOpen: sideBarToggler, toggleSideBar: toggleSideBar }}>{children}</SideBarContext.Provider>
  )
}
