import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { UserContextProvider } from "./contexts/UserContext";


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
    <App />  
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


