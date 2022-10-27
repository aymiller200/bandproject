import "./Home.css";
import { Link } from "react-router-dom";
import { RiContactsBookFill, RiRoadMapFill, RiCalendarFill, RiStickyNoteFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { FC, useEffect } from "react";

interface IHome{
  ToggleSideBar:(toggled:boolean) => void;
}

const Home: FC<IHome> = ({ToggleSideBar}) => {
const style = {color: "var(--clr--primary)"}

useEffect(() => {
  ToggleSideBar(false)
})
  
  return (
    <div className='home--container'>
      <ul className='home--category-list'>
        <Link to="/people" style={style} >
          <li className='category--item category--people' onClick={() => ToggleSideBar(true)}>
            <RiContactsBookFill />
            <h5>People</h5>
          </li>
        </Link>
        <Link to="/places" style={style} >
          <li className='category--item category--places' onClick={() => ToggleSideBar(true)}>
            <RiRoadMapFill />
            <h5>Places</h5>
          </li>
        </Link>
        <Link to="/dates" style={style} >
          <li className='category--item category--calendar' onClick={() => ToggleSideBar(true)}>
            <RiCalendarFill />
            <h5>Dates</h5>
          </li>
        </Link>
        <Link to="/notes" style={style} >
          <li className='category--item category--notes' onClick={() => ToggleSideBar(true)}>
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