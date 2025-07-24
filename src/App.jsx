//*import { useState } from 'react'
/*import reactLogo from "./assets/react.svg";*/
/*import viteLogo from "/vite.svg";*/
import "./App.css";
import Header from "./components/Header/Header";
import "./blocks/page.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import React, { useState, useEffect } from "react";
import api from "./utils/api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        () => console.log(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
