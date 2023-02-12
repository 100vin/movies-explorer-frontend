import './Movies.css';
import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { durationShortMovie } from '../../utils/constants';

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getSavedMovies()
    .then((movies) => {
      setMovies(movies);
      setFilteredMovies(movies);
      setIsLoading(false);
    });
  }, []);

  const filterMovies = (movies, search) => {
    setFilteredMovies(movies.filter((movie) => {
      const isNameMatched = movie.nameRU.toLowerCase().includes(search.name.toLowerCase().trim());
      const isShortsMatched = search.isShorts ? movie.duration <= durationShortMovie : true;
      return isNameMatched && isShortsMatched;
    }));
  };

  const handleSearch = (search) => {
    filterMovies(movies, search);
  }

  const removeMovie = (movie) => {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        moviesApi.removeFromSaved(movie.movieId);
        setMovies(movies.filter(m => m._id !== movie._id));
        setFilteredMovies(filteredMovies.filter(m => m._id !== movie._id));
      })
  }

  return (
    <main className="main">
      <SearchForm onSearch={handleSearch} isSavedPage={true} />
      <MoviesCardList 
        cards={filteredMovies}
        isLoading={isLoading}
        isSavedPage={true}
        onButtonClick={removeMovie}
      />
    </main>
  );
};

export default SavedMovies;
