import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import { paths } from '../../utils/constants';

const Register = ({ onRegister }) => {
  const { values, errors, isValid, handleChange } = useFormValidation();
  const [apiError, setApiError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid && onRegister(values, setApiError);
  }

  return (
    <main className="main auth">
      <section className="container auth__container">
        <form className="auth__form" action="/" name="register" onSubmit={handleSubmit}>
          <div className="auth__top">
            <Link className="auth__logotip animation" to={paths.main} title="На главную" />
            <h1 className="auth__title">Добро пожаловать!</h1>
          </div>
          <fieldset className="auth__fieldset auth__fieldset_type_inputs">
            <label className="auth__field">
              <span className="auth__field-name">Имя</span>
              <input
                className="auth__input"
                type="text"
                name="name"
                minLength={2}
                maxLength={30}
                placeholder="user"
                required
                value={values.name || ''}
                onChange={handleChange}
              />
              <span className="auth__field-error">{errors.name}</span>
            </label>
            <label className="auth__field">
              <span className="auth__field-name">E-mail</span>
              <input
                className="auth__input"
                type="email"
                name="email"
                pattern="^([\w]+@([\w-]+\.)+[\w]{2,})?$"
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
              Зарегистрироваться
            </button>
            <p className="auth__buttons-text">
              Уже зарегистрированы?
              <Link className="auth__buttons-link animation" to={paths.login}>Войти</Link>
            </p>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Register;
