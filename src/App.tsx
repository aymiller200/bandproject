import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import SearchBar from "./components/Header/SearchBar";
import People from "./pages/People/People";
import Places from "./pages/Places/Places";
import Dates from "./pages/Dates/Dates";
import Notes from "./pages/Notes/Notes";
import SideBar from "./components/SideBar/SideBar";
import MobileSideBar from "./components/SideBar/MobileSideBar/MobileSideBar";

function App() {
  const [sideBarToggler, setSideBarToggler] = useState(false)
  const [isMobileSideBarOpen, setIsMobileSideBarOpen] = useState(false);

  const toggleSideBar = (toggled: boolean) => {
    setSideBarToggler(toggled)
  }

  const toggleMobileSideBar = (toggled: boolean) => {
    setIsMobileSideBarOpen(toggled)
    console.log(toggled)
  }

  return (
    <div className="App">
      {sideBarToggler ? <SideBar /> : null}
      <div className={isMobileSideBarOpen ? 'mobile-side-bar--container' : 'mobile-side-bar--container__hidden'}>
        <MobileSideBar />
      </div>
      <div className={isMobileSideBarOpen ? 'backdrop' : 'backdrop__hidden'} onClick={() => toggleMobileSideBar(false)}></div>
      <SearchBar toggleMobileSideBar={toggleMobileSideBar} isMobileSideBarOpen={isMobileSideBarOpen} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home toggleSideBar={toggleSideBar} />} />
          <Route path="/people" element={<People />} />
          <Route path="/places" element={<Places />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
