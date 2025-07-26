//*import { useState } from 'react'
/*import reactLogo from "./assets/react.svg";*/
/*import viteLogo from "/vite.svg";*/
import "./App.css";
import Header from "./components/Header/Header";
import "./blocks/page.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import api from "./utils/api.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleUpdateUser = (data) => {
    console.log(data);
    (async () => {
      await api
        .updateUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  };

  // No renderices la app hasta que currentUser esté listo
  if (!currentUser) {
    return <div>Cargando usuario...</div>;
  }
  const handleOpenPopup = (card) => setSelectedCard(card);

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  const handleUpdateAvatar = (data) => {
    api
      .AvatarUpdate(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        handleClosePopup();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={selectedCard}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
