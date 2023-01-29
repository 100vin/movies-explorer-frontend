import './NavTab.css';

const NavTab = () => {
  return (
    <section className="navtab">
      <div className="container navtab__container">
        <nav className="navtab__menu">
          <ul className="navtab__list">
            <li><a className="navtab__link animation" href="#about-project">О проекте</a></li>
            <li><a className="navtab__link animation" href="#techs">Технологии</a></li>
            <li><a className="navtab__link animation" href="#about-me">Студент</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavTab;
