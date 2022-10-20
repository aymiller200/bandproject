import "./SearchBar.css"
import {RiSearchEyeFill} from "react-icons/ri"

const SearchBar = () => {

  return(
    <div className='header--container'>
      <div className='header'>
        <div className='header--icon'>
          <RiSearchEyeFill />
        </div>
      <input type='text' placeholder='Search'/>
      </div>
    </div>
  )
}

export default SearchBar