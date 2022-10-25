import "./Home.css";
import { Link } from "react-router-dom";
import { RiContactsBookFill, RiRoadMapFill, RiCalendarFill, RiStickyNoteFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { FC, useEffect, useRef, useState } from "react";

interface IHome{
  toggleSideBar:(toggled:boolean) => void;
}

const Home: FC<IHome> = ({toggleSideBar}) => {
const style = {color: "var(--clr--primary)"}

useEffect(() => {
  toggleSideBar(false)
})
  
  return (
    <div className='home--container'>
      <ul className='home--category-list'>
        <Link to="/people" style={style} >
          <li className='category--item category--people' onClick={() => toggleSideBar(true)}>
            <RiContactsBookFill />
            <h5>People</h5>
          </li>
        </Link>
        <Link to="/places" style={style} >
          <li className='category--item category--places' onClick={() => toggleSideBar(true)}>
            <RiRoadMapFill />
            <h5>Places</h5>
          </li>
        </Link>
        <Link to="/dates" style={style} >
          <li className='category--item category--calendar' onClick={() => toggleSideBar(true)}>
            <RiCalendarFill />
            <h5>Dates</h5>
          </li>
        </Link>
        <Link to="/notes" style={style} >
          <li className='category--item category--notes' onClick={() => toggleSideBar(true)}>
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