import "./Home.css"
import { useEffect, useState } from "react"
import { RiContactsBookFill, RiRoadMapFill, RiCalendarFill, RiStickyNoteFill } from 'react-icons/ri'
import {AiFillPlusCircle} from 'react-icons/ai'

const Home = () => {


  return (
    <div className='home--container'>

      <ul className='home--category-list'>
        <li className='category--item category--people'>
          <RiContactsBookFill />
          <h5>People</h5>
        </li>
        <li className='category--item category--places'>
          <RiRoadMapFill />
          <h5>Places</h5>
        </li>
        <li className='category--item category--calendar'>
          <RiCalendarFill />
          <h5>Dates</h5>
        </li>
        <li className='category--item category--notes'>
          <RiStickyNoteFill />
          <h5>Notes</h5>
        </li>
      </ul>
        <div className='add-category--button'>
          <AiFillPlusCircle />
        </div>

    </div>

  )
}

export default Home