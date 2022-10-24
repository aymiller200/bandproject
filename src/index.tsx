import React, { useState } from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchBar from './components/Header/SearchBar';
import People from './pages/People/People';
import Places from './pages/Places/Places';
import Dates from './pages/Dates/Dates'
import Notes from './pages/Notes/Notes'
import SideBar from './components/SideBar/SideBar';
import {SideBarContextProvider} from './contexts/SideBarContext'

ReactDOM.render(
  <React.StrictMode>
    <SideBarContextProvider>
      <SideBar />
    </SideBarContextProvider>
    <SearchBar />
    <BrowserRouter>
      <Routes> 
        <Route index element={<App />}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/places" element={<Places/>}/>
        <Route path="/dates" element={<Dates />}/>
        <Route path="/notes" element={<Notes />}/>
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


