export default function EditAvatar() {
  return (
    <form
      action="#"
      className="popup__form"
      id="popup__editperfil-form"
      novalidate
    >
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
          disabled
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
