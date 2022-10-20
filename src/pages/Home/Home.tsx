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
        </li>
        <li className='category--item category--places'>
          <RiRoadMapFill />
        </li>
        <li className='category--item category--calendar'>
          <RiCalendarFill />
        </li>
        <li className='category--item category--notes'>
          <RiStickyNoteFill />
        </li>
      </ul>
        <div className='add-category--button'>
          <AiFillPlusCircle />
        </div>

    </div>

  )
}

export default Home