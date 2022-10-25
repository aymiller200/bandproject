import "./SideBar.css";
import { RiHomeFill, RiContactsBookFill, RiRoadMapFill, RiCalendarFill, RiStickyNoteFill } from "react-icons/ri";

const SideBar = () => {
  return(

  <div className='sidebar--container'>
      <ul className='sidebar--list'>
        <li>
          <RiHomeFill />
        </li>
        <hr className='sidebar--home--partician'/>
        <li>
          <RiContactsBookFill />
        </li>
        <li>
          <RiRoadMapFill />
        </li>
        <li>
          <RiCalendarFill />
        </li>
        <li>
        <RiStickyNoteFill />
        </li>
      </ul>
     </div>
 

  )
}

export default SideBar