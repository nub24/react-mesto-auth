import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import PopupWithForm from "./PopupWithForm";
import useForm from '../hooks/useForm'

function EditProfilePopup({buttonText, isOpen, onClose, onUpdateUser}) {

  const currentUser=useContext(CurrentUserContext);
  const { values, handleChange, setValues} = useForm({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ 
      name: values.name, 
      about: values.about });
  }

  useEffect(() => {
    setValues({
      name : currentUser.name,
      about : currentUser.about
    })
  }, [currentUser, isOpen])

  return (
    <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText={buttonText}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <div className="form__input-container">
            <input
              type="text"
              name="name"
              className="form__input form__input_profile_name"
              placeholder="Введите имя"
              required
              minength="2"
              maxLength="40"
              value={values.name || ''}
              onChange={handleChange}
            />
            <span className="form__input-error name-error"></span>
            <input
              type="text"
              name="about"
              className="form__input form__input_profile_description"
              placeholder="Введите описание"
              required
              minLength="2"
              maxLength="200"
              value={values.about || ''}
              onChange={handleChange}
            />
            <span className="form__input-error about-error"></span>
          </div>
        </PopupWithForm>
  )
}

export default EditProfilePopup