import FotoAvatar from "../../images/Arlen-37.png";
import EditarAvatar from "../../images/Editarperfil.png";
import EditarNombre from "../../images/EditButton.png";
import BotonAdd from "../../images/AddButton.png";
import Card from "../Main/components/Card/Card";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Form/New Card/NewCard.jsx";
import EditAvatar from "./components/Form/EditAvatar/EditAvatar.jsx";
import EditProfile from "./components/Form/EditProfile/EditProfile.jsx";
import ImagePopup from "./components/Form/ImagePopup/ImagePopup.jsx";

import { useState, useEffect } from "react";

import api from "../../utils/api.js";

import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

/*const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];*/

/*console.log(cards);*/

const Main = () => {
  const [popup, setPopup] = useState(null);

  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        () => console.log(err);
      });
  }, []);

  // 👇 Aquí va la función para likes/dislikes
  async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;

    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <img
            src={currentUser?.avatar}
            alt="Arlene Gomez"
            className="profile__infoavatar"
            id="avatar"
            loading="lazy"
          />
          <button
            className="profile__editavatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img src={EditarAvatar} alt="Editar icono" />
          </button>
          <div className="profile__name">
            <h1 className="profile__namenames" id="name">
              {currentUser?.name}
            </h1>
            <img
              src={EditarNombre}
              alt="editar boton"
              className="profile__nameeditbutton"
              id="nameedit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
            <p className="profile__namesubname" id="about">
              {currentUser?.about}
            </p>
          </div>
          <img
            src={BotonAdd}
            alt="boton de signo mas"
            className="profile__infoaddbutton"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </div>
      </section>

      <section className="element">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={handleCardLike} // <-- Aquí pasas la función
            setSelectedCard={() => {}}
          />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </main>
  );
};

export default Main;
