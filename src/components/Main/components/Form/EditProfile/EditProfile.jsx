export default function EditProfile() {
  return (
    <form action="#" className="popup__form" id="popup__formedit" noValidate>
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
