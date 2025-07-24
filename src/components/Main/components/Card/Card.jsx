import ButtonLike from "../../../../images/Group.svg";
import image from "../../../../images/VanoisNational.png";
import React, { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

const Card = ({ card, setSelectedCard, onCardLike }) => {
  const { name, link } = card;

  const imageComponent = {
    title: name,
    card: {
      name,
      link,
    },
  };

  function handleOpenPopup() {
    setSelectedCard(card);
  }
  const currentUser = useContext(CurrentUserContext);

  const isLiked = card.likes.some((like) => like._id === currentUser._id);

  const cardLikeButtonClassName = `element__contentlike ${
    isLiked ? "element__contentlike-active" : ""
  }`;

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
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        id="popupdelete"
        type="button"
        className="element__delete"
      ></button>
      <div className="element__content">
        <p id="element_paragraph" className="element__contentparagraph">
          {name}
        </p>
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
