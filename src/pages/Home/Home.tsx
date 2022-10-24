import "./Home.css"
import { Link } from "react-router-dom"
import { RiContactsBookFill, RiRoadMapFill, RiCalendarFill, RiStickyNoteFill } from "react-icons/ri"
import { AiFillPlusCircle } from "react-icons/ai"
import { FC, useEffect, useState } from "react"
import { useContext } from 'react';
import {SideBarContext} from "../../contexts/SideBarContext"


const Home: FC = () => {
  const sideBar = useContext(SideBarContext)
  const style = { color: "var(--clr--primary)" }
  
  return (
    <div className='home--container'>

      <ul className='home--category-list'>
        <Link to="/people" style={style} >
          <li className='category--item category--people' onClick={sideBar.toggleSideBar}>
            <RiContactsBookFill />
            <h5>People</h5>
          </li>
        </Link>
        <Link to="/places" style={style} >
          <li className='category--item category--places' onClick={sideBar.toggleSideBar}>
            <RiRoadMapFill />
            <h5>Places</h5>
          </li>
        </Link>
        <Link to="/dates" style={style} >
          <li className='category--item category--calendar' onClick={sideBar.toggleSideBar}>
            <RiCalendarFill />
            <h5>Dates</h5>
          </li>
        </Link>
        <Link to="/notes" style={style} >
          <li className='category--item category--notes' onClick={sideBar.toggleSideBar}>
            <RiStickyNoteFill />
            <h5>Notes</h5>
          </li>
        </Link>
      </ul>
      <div className='add-category--button'>
        <AiFillPlusCircle />
      </div>

    </div>

  )
}

export default Home