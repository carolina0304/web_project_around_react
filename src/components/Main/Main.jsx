import FotoAvatar from "../../images/Arlen-37.png";
import EditarAvatar from "../../images/Editarperfil.png";
import EditarNombre from "../../images/EditButton.png";
import BotonAdd from "../../images/AddButton.png";
import Card from "../Main/components/Card/Card";

const Main = () => {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <img
            src={FotoAvatar}
            alt="Arlene Gomez"
            class="profile__infoavatar"
            id="avatar"
            loading="lazy"
          />
          <button className="profile__editavatar">
            <img src={EditarAvatar} alt="Editar icono" />
          </button>
          <div className="profile__name">
            <h1 className="profile__namenames" id="name"></h1>
            <img
              src={EditarNombre}
              alt="editar boton"
              className="profile__nameeditbutton"
              id="nameedit-button"
            />
            <p className="profile__namesubname" id="about"></p>
          </div>
          <img
            src={BotonAdd}
            alt="boton de signo mas"
            className="profile__infoaddbutton"
          />
        </div>
      </section>
      //*Cartas
      <section className="element">
        <Card />
      </section>
    </main>
  );
};

export default Main;
