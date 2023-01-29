import './Register.css';
import { Link } from 'react-router-dom';
import { paths } from '../../utils/constants';

const Register = () => {
  return (
    <main className="main auth">
      <section className="container auth__container">
        <form className="auth__form" action="/" name="register">
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
                // value="Виталий"
                required
              />
              <span className="auth__field-error"></span>
            </label>
            <label className="auth__field">
              <span className="auth__field-name">E-mail</span>
              <input
                className="auth__input"
                type="email"
                name="email"
                // value="pochta@yandex.ru"
                required
              />
              <span className="auth__field-error"></span>
            </label>
            <label className="auth__field">
              <span className="auth__field-name">Пароль</span>
              <input
                className="auth__input"
                type="password"
                name="password"
                // value=""
                required
              />
              <span className="auth__field-error">Что-то пошло не так...</span>
            </label>
          </fieldset>
          <fieldset className="auth__fieldset auth__fieldset_type_buttons">
            <button className="auth__button animation" type="submit">Зарегистрироваться</button>
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
