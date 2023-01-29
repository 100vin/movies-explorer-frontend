import './Header.css';
import { Link  } from 'react-router-dom';
import { paths } from '../../utils/constants';

const Header = ({ isMainPage, children }) => {
  return (
    <header className={`header ${isMainPage ? 'header_type_main' : ''}`}>
      <div className="container header__container">
        <Link className="header__logotip animation" to={paths.main} title="На главную" />
        { children }
      </div>
    </header>
  );
};

export default Header;
