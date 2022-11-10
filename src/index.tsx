import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { ErrorContextProvider } from "./contexts/ErrorContext";


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ErrorContextProvider>
        <App />
      </ErrorContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


