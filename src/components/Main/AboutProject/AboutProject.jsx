import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="section about-project" id="about-project">
      <div className="container about-project__container">
        <h2 className='section__title'>О проекте</h2>
        <div className="about-project__columns">
          <div className="about-project__column">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__column">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__stages">
          <div className="about-project__stage about-project__stage_type_backend">1 неделя</div>
          <div className="about-project__stage about-project__stage_type_frontend">4 недели</div>
          <div className="about-project__stage about-project__stage_type_label">Back-end</div>
          <div className="about-project__stage about-project__stage_type_label">Front-end</div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
