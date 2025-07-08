import "../../blocks/header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src="../../images/Vector.png"
          alt="Logotipo Around"
        />
        <img className="header__line" src="../../images/Line.png" alt="Linea" />
      </header>
    </>
  );
};

export default Header;
