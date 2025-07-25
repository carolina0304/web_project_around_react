import ButtonLike from "../../../../images/Group.svg";
import image from "../../../../images/VanoisNational.png";
import React, { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

const Card = ({ card, setSelectedCard, onCardLike }) => {
  const { name, link, likes = [] } = card; // fallback a [] si likes no existe

  const currentUser = useContext(CurrentUserContext);

  const isLiked = likes.some((like) => like._id === currentUser._id);
  /*const imageComponent = {
    title: name,
    card: {
      name,
      link,
    },
  };*/

  const cardLikeButtonClassName = `element__contentbutton ${
    isLiked ? "element__contentlike-active" : ""
  }`;

  // Abrir imagen en popup
  function handleOpenPopup() {
    setSelectedCard(card);
  }

  // 👇 Llama al manejador del like
  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <div className="element__card">
      <img
        id="element__cardimage"
        className="element__cardimage"
        src={link}
        alt={name}
        onClick={handleOpenPopup}
      />
      <button
        id="popupdelete"
        type="button"
        className="element__delete"
      ></button>
      <div className="element__content">
        <p className="element__contentparagraph">{name}</p>
        <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        >
          <img src={ButtonLike} alt="like" className="element__contentlike" />
        </button>
      </div>
    </div>
  );
};

export default Card;
