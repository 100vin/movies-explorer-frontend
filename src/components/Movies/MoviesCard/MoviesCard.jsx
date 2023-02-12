import './MoviesCard.css';
import { mediaBaseUrl } from '../../../utils/constants';

const convertMinToHours = (minutes) => {
  const m = minutes % 60;
  const h = (minutes - m) / 60;
  return `${h}ч ${m.toString().padStart(2, '0')}м`;
};

const MoviesCard = ({ card, isSavedPage = false, onButtonClick}) => {
  const { nameRU, duration, image, trailerLink, isSaved = false } = card;
  const imageUrl = isSavedPage ? image : mediaBaseUrl + image.url;
  const buttonTypeClass = isSavedPage 
    ? 'movies-card__button_type_remove' 
    : isSaved 
      ? 'movies-card__button_type_saved' 
      : 'movies-card__button_type_save';

  return (
    <article className="movies-card">
      <a className="movies-card__link animation" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={imageUrl} alt={nameRU} />
      </a>
      <div className="movies-card__info">
        <h2 className="movies-card__title">{nameRU}</h2>
        <button className={`movies-card__button ${buttonTypeClass} animation`} onClick={() => onButtonClick(card)} />
      </div>
      <p className="movies-card__duration">{convertMinToHours(duration)}</p>
    </article>
  );
};

export default MoviesCard;
