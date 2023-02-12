import { mainApiBaseUrl } from './constants';
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers; 
    this._movies = JSON.parse(localStorage.getItem('movies_saved') || '[]');
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

  _getHeaders() {
    const headers = {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return headers;
  }

  // Добавление токена
  setToken(token) {
    // this._headers.authorization = token;
    this._headers.authorization = `Bearer ${token}`;
  }

  // POST /signup — создаёт пользователя с переданными в теле email, password и name
  register({ name, email, password }) {
    return this._fetch('/signup', 'POST', { name, email, password });
  }

  // POST /signin — проверяет переданные в теле почту и пароль и возвращает JWT
  login({ email, password }) {
    return this._fetch('/signin', 'POST', { email, password });
  }

  // GET /users/me — возвращает информацию о пользователе (email и имя)
  getUserInfo() {
    return this._fetch('/users/me');
  }

  setUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email }),
    }).then((res) => this._handleResponse(res));
  }
  
  // GET /movies — возвращает все сохранённые текущим пользователем фильмы
  async getSavedMovies() {
    if (this._movies.length === 0) {
      this._movies = await this._fetch('/movies');
      localStorage.setItem('movies_saved', JSON.stringify(this._movies));
    }
    return this._movies;
  }

  // POST /movies — создаёт фильм с переданными в теле country, director, duration, year, 
  // description, image, trailerLink, thumbnail, movieId, nameRU, nameEN
  saveMovie(movie) {
    return this._fetch('/movies', 'POST', movie)
      .then((movie) => {
        this._movies.push(movie);
        localStorage.setItem('movies_saved', JSON.stringify(this._movies));
        return movie;
      });
  }

  // DELETE /movies/_id — удаляет сохранённый фильм по id
  deleteMovie(id) {
    return this._fetch(`/movies/${id}`, 'DELETE')
      .then((movie) => {
        this._movies = this._movies.filter((movie) => movie._id !== id);
        localStorage.setItem('movies_saved', JSON.stringify(this._movies));
        return movie;
      });
  }

  reset() {
    this._movies = [];
    this.setToken('');
  }
}

const mainApi = new Api({
  baseUrl: mainApiBaseUrl,
  headers: {
    authorization: '',
    'Content-Type': 'application/json'
  }
});

export default mainApi;
