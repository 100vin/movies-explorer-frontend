import { moviesApiBaseUrl } from './constants';
import mainApi from './MainApi';
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._movies = JSON.parse(localStorage.getItem('movies_all') || '[]');
  }

  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _fetch(url, method = 'GET', body = undefined) {
    return fetch(`${this._baseUrl}${url}`, {
      method,
      headers: this._headers,
      body: (body && JSON.stringify(body)),
    })
    .then(this._handleResponse);
  }

  // Возвращает все фильмы из сервиса Beatfilm
  async getAllMovies() {
    if (this._movies.length === 0) {
      const allMovies = await this._fetch('/');
      // Добавляем данные сохраненных фильмов
      const savedMovies = await mainApi.getSavedMovies();
      this._movies = allMovies.map((movie) => {
        const matchedMovie = savedMovies.find((m) => m.movieId === movie.id);
        movie._id = matchedMovie ? matchedMovie._id : '';
        movie.isSaved = !!matchedMovie;
        return movie;
      });
      localStorage.setItem('movies_all', JSON.stringify(this._movies));
    }
    return this._movies;
  }

  // Добавляет фильм в список сохраненных
  addToSaved(savedMovie) {
    this._movies = this._movies.map((movie) => {
      if (movie.id === savedMovie.movieId) {
        movie._id = savedMovie._id;
        movie.isSaved = true;
      }
      return movie;
    });
    localStorage.setItem('movies_all', JSON.stringify(this._movies));
    return this._movies;
  }

  // Удаляет фильм из списка сохраненных по id
  removeFromSaved(movieId) {
    this._movies = this._movies.map((movie) => {
      if (movie.id === movieId) {
        movie._id = '';
        movie.isSaved = false;
      }
      return movie;
    });
    localStorage.setItem('movies_all', JSON.stringify(this._movies));
    return this._movies;
  }

  reset() {
    this._movies = [];
  }
}

const moviesApi = new Api({
  baseUrl: moviesApiBaseUrl,
  headers: {
    authorization: '',
    'Content-Type': 'application/json'
  }
});

export default moviesApi;