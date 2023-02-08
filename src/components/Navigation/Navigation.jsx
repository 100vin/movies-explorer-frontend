import './Navigation.css';
import { Link, NavLink, useLocation  } from 'react-router-dom';
import { paths } from '../../utils/constants';

const Navigation = ({ isLoggedIn, isOpen, onClick }) => {
  return (
    <nav className="navigation">
      { isLoggedIn
        ? (<>
            <div className={`navigation__popup ${isOpen ? 'navigation__popup_opened': ''}`}>
              <div className="navigation__menu">
                <button 
                  className="navigation__button navigation__button_type_close animation"
                  type="button"
                  onClick={onClick}
                />
                <ul className="navigation__list">
                  <li>
                    <NavLink
                      className="navigation__link navigation__link_type_mobile animation"
                      to={paths.main}
                      onClick={onClick}
                    >
                      Главная
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="navigation__link animation"
                      to={paths.movies}
                      onClick={onClick}
                    >
                      Фильмы
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="navigation__link animation"
                      to={paths.movies_saved}
                      onClick={onClick}
                    >
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                </ul>
                <Link
                  className="navigation__link navigation__link_type_icon navigation__link_icon_user animation"
                  to={paths.profile}
                  onClick={onClick}
                >
                  Аккаунт
                </Link>
              </div>
            </div>
            <button
              className="navigation__button navigation__button_type_burger animation"
              type="button"
              onClick={onClick}
            />
          </>)
        : (
          <ul className="navigation__list">
            <li>
              <Link
                className="navigation__link animation"
                to={paths.register}
              >
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                className="navigation__link navigation__link_type_button animation"
                to={paths.login}
              >
                Войти
              </Link>
            </li>
          </ul>
        )
      }
    </nav>
  );
};

export default Navigation;
