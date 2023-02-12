import './Movies.css';
import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import useWindowSize from '../../hooks/useWindowSize';
import { durationShortMovie, mediaBaseUrl, renderConst } from '../../utils/constants';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const windowSize = useWindowSize();
  const [renderShow, setRenderShow] = useState(0);
  const [renderAdd, setRenderAdd] = useState(0);

  useEffect(() => {
    const renderValues = renderConst.find((values) => values.size < windowSize);
    setRenderShow(renderValues.start);
    setRenderAdd(renderValues.add);
  }, [windowSize]);

  const handleAdd = () => {
    setRenderShow(renderShow + renderAdd);
  }
  
  const filterMovies = (movies, search) => {
    setFilteredMovies(movies.filter((movie) => {
      const isNameMatched = movie.nameRU.toLowerCase().includes(search.name.toLowerCase().trim());
      const isShortsMatched = search.isShorts ? movie.duration <= durationShortMovie : true;
      return isNameMatched && isShortsMatched;
    }));
  };

  const handleSearch = (search) => {
    localStorage.setItem('search', JSON.stringify(search));
    setIsSearched(true);
    if (movies.length === 0) {
      setIsLoading(true);
      moviesApi.getAllMovies().then((movies) => { 
        setMovies(movies);
        filterMovies(movies, search);
        setIsLoading(false);
      });
    } else {
      filterMovies(movies, search);
    }
  };

  const toggleSaveMovie = (movie) => {
    if (movie.isSaved) {
      mainApi.deleteMovie(movie._id)
      .then((deletedMovie) => moviesApi.removeFromSaved(deletedMovie.movieId))
      .then((updatedMovies) => setMovies(updatedMovies));
    } else {
      mainApi.saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: mediaBaseUrl + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: mediaBaseUrl + movie.image.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN, 
      })
      .then((savedMovie) => moviesApi.addToSaved(savedMovie))
      .then((updatedMovies) => setMovies(updatedMovies));
    }
  };

  return (
    <main className="main">
      <SearchForm onSearch={handleSearch} />
      <MoviesCardList
        cards={filteredMovies.filter((el, i) => i < renderShow)}
        hasMore={filteredMovies.length > renderShow}
        onAdd={handleAdd}
        isLoading={isLoading}
        isSearched={isSearched}
        onButtonClick={toggleSaveMovie}
      />
    </main>
  );
};

export default Movies;
