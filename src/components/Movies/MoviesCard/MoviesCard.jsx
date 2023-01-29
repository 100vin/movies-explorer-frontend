import './MoviesCard.css';

const convertMinToHours = (minutes) => {
  const m = minutes % 60;
  const h = (minutes - m) / 60;
  return `${h}ч ${m.toString().padStart(2, '0')}м`;
};

const MoviesCard = ({ card, isSavedPage = false }) => {
  const buttonTypeClass = isSavedPage 
    ? 'movies-card__button_type_remove' 
    : card.isSaved 
      ? 'movies-card__button_type_saved' 
      : 'movies-card__button_type_save';
  return (
    <article className="movies-card">
      <img className="movies-card__image" src={card.image} alt={card.name} />
      <div className="movies-card__info">
        <h2 className="movies-card__title">{card.name}</h2>
        <button className={`movies-card__button ${buttonTypeClass} animation`} />
      </div>
      <p className="movies-card__duration">{convertMinToHours(card.duration)}</p>
    </article>
  );
};

export default MoviesCard;
