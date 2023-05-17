function Login() {
  return (
    <div className='form__container'>
      <h2 className='popup__title form__title'>Вход</h2>
      <form className="form">
      <div className="form__input-container">
            <input
              type="email"
              name="registration-email"
              className="form__input form__input_theme_dark form__input_place_name"
              placeholder="Email"
              required
            />
            <span className="form__input-error registration-email-error"></span>
            <input
              type="password"
              name="registration-password"
              className="form__input form__input_theme_dark form__input_place_link"
              placeholder="Пароль"
              required
            />
            <span className="form__input-error registration-password-error"></span>
          </div>
        
      <button className='form__button-save form__button-save_theme_dark'>
        Войти
      </button>
    </form>
    </div>
    
  )
}

export default Login