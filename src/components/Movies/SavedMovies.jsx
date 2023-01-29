import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { testmovies } from '../../utils/testmovies';

const SavedMovies = () => {
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList 
        cards={testmovies.filter(card => card.isSaved)}
        isSavedPage={true}
      />
    </main>
  );
};

export default SavedMovies;
