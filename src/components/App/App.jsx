import './App.css';
import { useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useRoutes,
} from 'react-router-dom';
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

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isMainPage, setIsMainPage] = useState(true);
  const [isNavPopupOpen, setIsNavPopupOpen] = useState(false);
  
  const location = useLocation();
  const isMainPage = location.pathname === paths.main;
  const isProfilePage = location.pathname === paths.profile;
  // useEffect(() => {
  //   location.pathname === paths.main ? setIsMainPage(true) : setIsMainPage(false);
  // }, [location]);

  const AppLayout = () => (
    <>
      <Header isMainPage={isMainPage}>
        <Navigation
          isLoggedIn={isLoggedIn}
          isMainPage={isMainPage} // Временно для тестирования
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
      element: <AppLayout />,
      children: [
        {
          path: paths.main,
          element: <Main />,
        },
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
          element: <Profile />,
        },
      ]
    },
    {
      path: paths.login,
      element: <Login />,
    },
    {
      path: paths.register,
      element: <Register />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return routes;
}

export default App;
