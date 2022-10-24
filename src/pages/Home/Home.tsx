import "./Home.css"
import {Link} from "react-router-dom"
import { RiContactsBookFill, RiRoadMapFill, RiCalendarFill, RiStickyNoteFill } from 'react-icons/ri'
import {AiFillPlusCircle} from 'react-icons/ai'

const Home = () => {
const style={color: "var(--clr--primary)"}

  return (
    <div className='home--container'>

      <ul className='home--category-list'>
       <li className='category--item category--people'>
        <Link to="/people" style={style}>
          <RiContactsBookFill />
          <h5>People</h5>
        </Link>
        </li>
        <li className='category--item category--places'>
          <Link to="/places" style={style}>
          <RiRoadMapFill />
          <h5>Places</h5>
          </Link>
        </li>
        <li className='category--item category--calendar'>
          <Link to="/dates" style={style}>
          <RiCalendarFill />
          <h5>Dates</h5>
          </Link>
        </li>
        <li className='category--item category--notes'>
          <Link to="/notes" style={style}>
          <RiStickyNoteFill />
          <h5>Notes</h5>
          </Link>
        </li>
      </ul>
        <div className='add-category--button'>
          <AiFillPlusCircle />
        </div>

    </div>

  )
}

export default Home