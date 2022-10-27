import "./SearchBar.css"
import { FC } from "react";
import {RiSearchEyeFill} from "react-icons/ri";
import {GiHamburgerMenu} from "react-icons/gi";


interface ISearchBar {
  ToggleMobileSideBar: (toggled: boolean) => void
  isMobileSideBarOpen: boolean
}

const SearchBar:FC<ISearchBar> = ({ToggleMobileSideBar, isMobileSideBarOpen}) => {


  return(
    <div className='header--container'>
      <div className='header'>
        <div className='header--icon'>
          <RiSearchEyeFill />
        </div>
      <input type='text' placeholder='Search'/>
      </div>
      <div className='mobile-header--menu-icon' onClick={() => ToggleMobileSideBar(!isMobileSideBarOpen)}>
      <GiHamburgerMenu />
      </div>
      
    </div>
  )
}

export default SearchBar