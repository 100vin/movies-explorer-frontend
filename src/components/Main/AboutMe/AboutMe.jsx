import './AboutMe.css';
import photo from '../../../images/about_photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => {
  return (
    <section className="section about-me" id="about-me">
      <div className="container about-me__container">
        <h2 className='section__title'>Студент</h2>
        <div className="about-me__columns">
          <div className="about-me__description">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__props">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className="about-me__link animation" href="https://github.com" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото студента" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutMe;
