import { useRef } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar({ onClose }) {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      action="#"
      className="popup__form"
      id="popup__editperfil-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2 className="popup__title">Cambiar foto de perfil</h2>
      <fieldset className="popup__fieldset">
        <label id="labelenlace" className="popup__lugar-label"></label>
        <input
          type="url"
          className="popup__input popup__input_type_error"
          id="perfil-enlace"
          name="url"
          placeholder="URL de imagen"
          required
        />
        <span className="popup__input-error perfil-enlace-error">
          Por favor, Introduce una imagen.
        </span>
        <button
          id="popup_guardar"
          type="submit"
          className="popup__button popup__button_disabled"
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
