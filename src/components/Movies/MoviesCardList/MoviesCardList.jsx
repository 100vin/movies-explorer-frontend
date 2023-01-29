import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({ cards, isSavedPage = false }) => {
  return (
    <section className="container movies-cardlist">
      <ul className="movies-cardlist__cards">
        {cards.map((card) => (
          <li className="movies-cardlist__item" key={card.id}>
            <MoviesCard 
              card={card}
              isSavedPage={isSavedPage}
            />
          </li>
        ))}
      </ul>
      {!isSavedPage && <button className="movies-cardlist__more animation">Ещё</button>}
      {/* <Preloader /> */}
      {/* <p className="movies-cardlist__message">По вашему запросу ничего не найдено</p> */}
    </section>
  );
};

export default MoviesCardList;
