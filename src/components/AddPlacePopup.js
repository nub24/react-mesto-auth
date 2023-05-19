import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useForm from '../hooks/useForm'

function AddPlacePopup({ buttonText, onAddPlace, isOpen, onClose }) {
  const { values, handleChange, setValues} = useForm({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ 
      name: values.name,
      link: values.link });
  }

  useEffect(() => {
    setValues({
      name : '',
      link : ''
    })
  }, [isOpen])

  return (
    <PopupWithForm
          name="add"
          title="Новое место"
          buttonText={buttonText}
          isOpen={isOpen && "popup_active"}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <div className="form__input-container">
            <input
              type="text"
              name="name"
              className="form__input form__input_place_name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              onChange={handleChange}
              value={values.name || ''}
            />
            <span className="form__input-error name-error"></span>
            <input
              type="url"
              name="link"
              className="form__input form__input_place_link"
              placeholder="Ссылка на картинку"
              required
              onChange={handleChange}
              value={values.link || ''}
            />
            <span className="form__input-error link-error"></span>
          </div>
        </PopupWithForm>
  )
}

export default AddPlacePopup