export default function NewCard() {
  return (
    <form action="#" className="popup__form" id="popup__lugar-form" noValidate>
      <fieldset className="popup__fieldset">
        <label id="labeltitulo" className="popup__label"></label>
        <input
          type="text"
          className="popup__input popup__input_type_error"
          id="name-titulo"
          name="name"
          placeholder="Titulo"
          minLength={2}
          maxLength={30}
          required
        />
        <span className="popup__input-error name-titulo-error">
          Por favor, rellena este campo.
        </span>
        <label id="labelenlace" className="popup__lugar-label"></label>
        <input
          type="url"
          className="popup__input popup__input_type_error"
          id="subname-enlace"
          name="url"
          placeholder="URL a la imagen"
          required
        />
        <span className="popup__input-error subname-enlace-error">
          Por favor, Introduce una direccion web.
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
