import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { testmovies } from '../../utils/testmovies';

const Movies = () => {
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList cards={testmovies} />
    </main>
  );
};

export default Movies;
