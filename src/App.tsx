import './App.css';
import { useContext } from 'react';
import {SideBarContext} from './contexts/SideBarContext'
import Home from './pages/Home/Home';


function App() {
  
    return (
    <div className="App">
      <Home />
    </div>

  );
}

export default App;
