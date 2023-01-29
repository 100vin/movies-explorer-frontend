import { Link } from 'react-router-dom';
import { paths } from '../../utils/constants';

const Login = () => {
  return (
    <main className="main auth">
      <section className="container auth__container">
        <form className="auth__form" action="/" name="login">
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
              <span className="auth__field-error"></span>
            </label>
          </fieldset>
          <fieldset className="auth__fieldset auth__fieldset_type_buttons">
            <button className="auth__button animation" type="submit">Войти</button>
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
