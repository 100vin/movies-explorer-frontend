import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({ 
  cards,
  onAdd,
  hasMore = false,
  isSavedPage = false,
  isLoading = false,
  isSearched = true,
  onButtonClick
}) => {
  return (
    <section className="container movies-cardlist">
      {isLoading && <Preloader />}
      {
      cards.length === 0 && isSearched && !isLoading && 
      <p className="movies-cardlist__message">По вашему запросу ничего не найдено</p>
      }
      <ul className="movies-cardlist__cards">
        {cards.map((card) => (
          <li className="movies-cardlist__item" key={isSavedPage ? card._id : card.id}>
            <MoviesCard 
              card={card}
              isSavedPage={isSavedPage}
              onButtonClick={onButtonClick}
            />
          </li>
        ))}
      </ul>
      {hasMore && <button className="movies-cardlist__more animation" onClick={onAdd}>Ещё</button>}
    </section>
  );
};

export default MoviesCardList;
