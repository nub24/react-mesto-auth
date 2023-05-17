import { useRef, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ buttonText, isOpen, onClose, onUpdateAvatar }) {

  const avatarRef = useRef();

  function handlesubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(avatarRef.current.value)
  }

  useEffect(() => {
    avatarRef.current.value=''
  }, [isOpen])

  return (
    <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText={buttonText}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handlesubmit}
        >
          <div className="form__input-container">
            <input
              type="url"
              name="avatar"
              className="form__input form__input_avatar_link"
              placeholder="Ссылка на картинку"
              required
              ref={avatarRef}
            />
            <span className="form__input-error avatar-error"></span>
          </div>
        </PopupWithForm>
  )
}

export default EditAvatarPopup