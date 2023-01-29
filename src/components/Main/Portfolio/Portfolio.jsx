import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link animation" href="https://ya.ru/" target="_blank" rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link animation" href="https://100vin.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link animation" href="https://ya.ru/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
