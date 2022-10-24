import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchBar from './components/Header/SearchBar';
import People from './pages/People/People';
import Places from './pages/Places/Places';
import Dates from './pages/Dates/Dates'
import Notes from './pages/Notes/Notes'


ReactDOM.render(
  <React.StrictMode>
     <SearchBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/places" element={<Places/>}/>
        <Route path="/dates" element={<Dates />}/>
        <Route path="/notes" element={<Notes />}/>
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


