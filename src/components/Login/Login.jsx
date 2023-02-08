import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import { paths } from '../../utils/constants';

const Login = ({ onLogin }) => {
  const { values, errors, isValid, handleChange } = useFormValidation();
  const [apiError, setApiError] = useState('');

  // const handleApiErrorMessage = () => {
  //   if (apiError) {
  //     switch (apiError) {
  //       case 400:
  //       case 401:
  //         setApiErrorMessage('Вы ввели неправильный логин или пароль.');
  //         break;
  //       case 500:
  //         setApiErrorMessage('При авторизации пользователя произошла ошибка.');
  //         break;
  //       default:
  //         setApiErrorMessage('Произошла ошибка. Попробуйте позже');
  //         break;
  //     }
  //   }
  // }

  // useEffect(() => {
  //   handleApiErrorMessage();
  // }, [apiError]);


  const handleSubmit = (e) => {
    e.preventDefault();
    isValid && onLogin(values, setApiError);
  }

  return (
    <main className="main auth">
      <section className="container auth__container">
        <form className="auth__form" action="/" name="login" onSubmit={handleSubmit}>
          <div className="auth__top">
            <Link className="auth__logotip animation" to={paths.main} title="На главную" />
            <h1 className="auth__title">Рады видеть!</h1>
          </div>
          <fieldset className="auth__fieldset auth__fieldset_type_inputs">
            <label className="auth__field">
              <span className="auth__field-name">E-mail</span>
              <input
                className="auth__input"
                type="email"
                name="email"
                pattern="^([\w]+@([\w-]+\.)+[\w]{2,})?$"
                // pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                placeholder="user@yandex.ru"
                required
                value={values.email || ''}
                onChange={handleChange}
              />
              <span className="auth__field-error">{errors.email}</span>
            </label>
            <label className="auth__field">
              <span className="auth__field-name">Пароль</span>
              <input
                className="auth__input"
                type="password"
                name="password"
                required
                value={values.password || ''}
                onChange={handleChange}
              />
              <span className="auth__field-error">{errors.password}</span>
            </label>
          </fieldset>
          <fieldset className="auth__fieldset auth__fieldset_type_buttons">
            <span className="auth__field-error auth__field-error_type_api">{apiError}</span>
            <button
              className={`auth__button ${isValid ? 'animation' : ''}`}
              type="submit"
              disabled={!isValid}
            >
              Войти
            </button>
            <p className="auth__buttons-text">
              Ещё не зарегистрированы?
              <Link className="auth__buttons-link animation" to={paths.register}>Регистрация</Link>
            </p>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Login;
