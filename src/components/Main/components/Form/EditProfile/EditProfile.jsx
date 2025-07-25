import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const currentUser = useContext(CurrentUserContext); // Obtiene el objeto currentUser

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza about cuando cambie la entrada
  };
  return (
    <form action="#" className="popup__form" id="popup__formedit" noValidate>
      <h2 className="popup__title">Editar Perfil</h2>
      <fieldset className="popup__fieldset">
        <label id="labelname" className="popup__label"></label>
        <input
          type="text"
          className="popup__input popup__input_type_error"
          id="name"
          name="name"
          placeholder="Nombre"
          minLength={2}
          maxLength={40}
          required
          value={name} // Vincula name con la entrada
          onChange={handleNameChange} // Agrega el controlador onChange
        />
        <span className="popup__input-error name-error">
          Por favor, rellena este campo.
        </span>
        <label id="labelsubname" className="popup__label"></label>
        <input
          type="text"
          className="popup__input"
          id="subname"
          name="job"
          placeholder="Acerca de mi"
          required
          minLength={2}
          maxLength={200}
          value={description} // Vincula description con la entrada
          onChange={handleDescriptionChange} // Agrega el controlador onChange
        />
        <span className="popup__input-error subname-error">
          Por favor, rellena este campo.
        </span>
        <button
          type="submit"
          className="popup__button popup__button_disabled"
          id="popup_guardaredit"
          disabled
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
