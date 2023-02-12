import './App.css';
import { useEffect, useState } from 'react';
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useRoutes,
} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { paths } from '../../utils/constants';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userResStatus, setUserResStatus] = useState(false);

  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  
  const isMainPage = location.pathname === paths.main;
  const isProfilePage = location.pathname === paths.profile;

  const tokenCheck = () => {
    const token = localStorage.getItem('token') || '';
    mainApi.setToken(token);
    if (token) {
      mainApi.getUserInfo()
      .then((userData) => {
        if (userData) {
            setCurrentUser(userData);
            setIsLoggedIn(true);
          } else {
            handleLogout();
          }
        })
        .catch((err) => {
          console.log(err);
          handleLogout();
        })
    } else {
      handleLogout();
    }
  }

  useEffect(() => tokenCheck(), [isLoggedIn]);

  const handleRegister = (userData, callback) => {
    mainApi.register(userData)
      .then((res) => {
        setCurrentUser(res);
        return mainApi.login({
          email: userData.email,
          password: userData.password,
        })
      })
      .then((res) => {
        localStorage.setItem('token', res.token);
        mainApi.setToken(res.token);
        setIsLoggedIn(true);
        callback('');
        navigate(paths.movies);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      })
  }

  const handleLogin = (userData, callback) => {
    mainApi.login(userData)
      .then((res) => {
        if (res.token) {
          setCurrentUser(res);
          localStorage.setItem('token', res.token);
          mainApi.setToken(res.token);
          setIsLoggedIn(true);
          callback('');
          navigate(paths.movies);
        }
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      })
  }

  const handleLogout = () => {
    localStorage.clear();
    setCurrentUser({});
    setIsLoggedIn(false);
    mainApi.reset();
    moviesApi.reset();
    // navigate(paths.main);
  }

  const handleUserEdit = (userData) => {
    setUserResStatus(false);
    mainApi.setUserInfo(userData)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setUserResStatus(200);
      })
      .catch((err) => {
        console.log(err);
        setUserResStatus(err);
      })
  }

  const AppLayout = () => (
    <>
      <Header isMainPage={isMainPage}>
        <Navigation
          isLoggedIn={isLoggedIn}
          isOpen={isNavPopupOpen}
          onClick={() => setIsNavPopupOpen(!isNavPopupOpen)}
        />
      </Header>
        <Outlet />
      {!isProfilePage && <Footer />}
    </>
  );

  const routes = useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: paths.main,
          element: <Main />,
        },
        {
          element: isLoggedIn ? <Outlet /> : <Navigate to={paths.main} replace />,
          children: [
            {
              path: paths.movies,
              element: <Movies />,
            },
            {
              path: paths.movies_saved,
              element: <SavedMovies />,
            },
            {
              path: paths.profile,
              element: <Profile onUserEdit={handleUserEdit} onLogout={handleLogout} resStatus={userResStatus} />,
            },
          ],
        },
      ]
    },
    {
      element: !isLoggedIn ? <Outlet /> : <Navigate to={paths.movies} replace />,
      children: [
        {
          path: paths.login,
          element: <Login onLogin={handleLogin} />,
        },
        {
          path: paths.register,
          element: <Register onRegister={handleRegister} />,
        },
      ],
    },
    {
      path: paths.not_found,
      element: <NotFound />,
    },
    {
      path: '*',
      element: <Navigate to={paths.not_found} replace />,
    },
  ]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {routes}
    </CurrentUserContext.Provider>
  )
}

export default App;
