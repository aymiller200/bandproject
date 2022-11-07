import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext, UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home/Home";
import SearchBar from "./components/Header/SearchBar";
import People from "./pages/People/People";
import Places from "./pages/Places/Places";
import Dates from "./pages/Dates/Dates";
import Notes from "./pages/Notes/Notes";
import SideBar from "./components/SideBar/SideBar";
import MobileSideBar from "./components/SideBar/MobileSideBar/MobileSideBar";
import Landing from "./pages/Landing/Landing";

function App() {
  const [sideBarToggler, setSideBarToggler] = useState(false)
  const [isMobileSideBarOpen, setIsMobileSideBarOpen] = useState(false);
  const userContext = useContext(UserContext);

  const ToggleSideBar = (toggled: boolean) => {
    setSideBarToggler(toggled)
  }

  const ToggleMobileSideBar = (toggled: boolean) => {
    setIsMobileSideBarOpen(toggled)
  }
  return (
    <div className="App">
        {!userContext.token ?
          <BrowserRouter>
            <Routes>
              <Route index element={<Landing />} />
            </Routes>
          </BrowserRouter> :
          <>
            {sideBarToggler ? <SideBar /> : null}
            <div className={isMobileSideBarOpen ? 'mobile-side-bar--container' : 'mobile-side-bar--container__hidden'}>
              <MobileSideBar />
            </div>
            <div className={isMobileSideBarOpen ? 'backdrop' : 'backdrop__hidden'} onClick={() => ToggleMobileSideBar(false)}></div>

            <SearchBar ToggleMobileSideBar={ToggleMobileSideBar} isMobileSideBarOpen={isMobileSideBarOpen} />
            <BrowserRouter>
              <Routes>
                <Route index element={<Home ToggleSideBar={ToggleSideBar} />} />
                <Route path="/people" element={<People />} />
                <Route path="/places" element={<Places />} />
                <Route path="/dates" element={<Dates />} />
                <Route path="/notes" element={<Notes />} />
              </Routes>
            </BrowserRouter>
          </>

        }
    

    </div>

  );
}

export default App;
