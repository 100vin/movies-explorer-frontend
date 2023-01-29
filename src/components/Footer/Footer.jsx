import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <h3 className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__bottom">
          <div className="footer__copyright">&copy; 2023</div>
          <ul className="footer__links">
            <li>
              <a className="footer__link animation" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="footer__link animation" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
