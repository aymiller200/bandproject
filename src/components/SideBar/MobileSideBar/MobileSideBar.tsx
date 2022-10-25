import "./MobileSideBar.css";
import { RiHomeFill, RiContactsBookFill, RiRoadMapFill, RiCalendarFill, RiStickyNoteFill } from "react-icons/ri";

const MobileSideBar = () => {

 return(
  <div className='mobile-sidebar--container'>
  <ul className='mobile-sidebar--list'>
     <li><RiHomeFill/></li>
     <hr className='mobile-sidebar--home--partician'/>
     <li><RiContactsBookFill /></li>
     <li><RiRoadMapFill /></li>
     <li><RiCalendarFill/></li>
     <li><RiStickyNoteFill /></li>
  </ul>
  </div>
 ) 

}

export default MobileSideBar