import ButtonLike from "../../../../images/Group.svg";
import image from "../../../../images/VanoisNational.png";

const Card = (props) => {
  const { name, link, isLiked } = props.card;
  return (
    <div className="element__card">
      <img
        id="element__cardimage"
        className="element__cardimage"
        src={link}
        alt=""
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
