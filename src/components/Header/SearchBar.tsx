import "./SearchBar.css"
import { FC, useState } from "react";
import {RiSearchEyeFill} from "react-icons/ri"
import {GiHamburgerMenu} from "react-icons/gi"
import SideBar from "../SideBar/SideBar";
import MobileSideBar from "../SideBar/MobileSideBar";

interface ISearchBar {
  toggleMobileSideBar: (toggled: boolean) => void
  isMobileSideBarOpen: boolean
}

const SearchBar:FC<ISearchBar> = ({toggleMobileSideBar, isMobileSideBarOpen}) => {


  return(
    <div className='header--container'>
      <div className='header'>
        <div className='header--icon'>
          <RiSearchEyeFill />
        </div>
      <input type='text' placeholder='Search'/>
      </div>
      <div className='mobile-header--menu-icon' onClick={() => toggleMobileSideBar(!isMobileSideBarOpen)}>
      <GiHamburgerMenu />
      </div>
      
    </div>
  )
}

export default SearchBar