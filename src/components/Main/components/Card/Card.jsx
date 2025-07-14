import ButtonLike from "../../../../images/Group.svg";
import image from "../../../../images/VanoisNational.png";

const Card = ({ card, setSelectedCard }) => {
  const { name, link, isLiked } = card;

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
        <button type="button" className="element__contentbutton">
          <img src={ButtonLike} alt="like" className="element__contentlike" />
        </button>
      </div>
    </div>
  );
};

export default Card;
