import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <button 
        className="notfound__button animation"
        type="button"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </main>
  );
};

export default NotFound;
