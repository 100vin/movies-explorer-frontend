import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';

const Profile = ({ onUserEdit, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isCurrentInfo, setIsCurrentInfo] = useState(false);

  const { values, errors, isValid, handleChange, resetForm } = useFormValidation();
  const { name = currentUser.name, email = currentUser.email } = values;

  useEffect(() => {
    setIsCurrentInfo(name === currentUser.name && email === currentUser.email);
  }, [name, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    isValid && onUserEdit(values);
    resetForm();
  }

  return (
    <main className="main profile">
      <section className="container profile__container">
        <form className="profile__form" name="profile" onSubmit={handleSubmit} >
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <fieldset className="profile__fieldset profile__fieldset_type_inputs">
            <label className="profile__field">
              <span className="profile__field-name">Имя</span>
              <input
                className="profile__input"
                type="text"
                name="name"
                minLength={2}
                required
                value={name || ''}
                onChange={handleChange}
              />
            </label>
            <label className="profile__field">
              <span className="profile__field-name">E-mail</span>
              <input
                className="profile__input"
                type="email"
                name="email"
                pattern="^([\w]+@([\w-]+\.)+[\w]{2,})?$"
                // pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                required
                value={email || ''}
                onChange={handleChange}
              />
            </label>
          </fieldset>
          <fieldset className="profile__fieldset profile__fieldset_type_buttons">
            {errors.name && <span className="profile__error">Имя: {errors.name}</span>}
            {errors.email && <span className="profile__error">E-mail: {errors.email}</span>}
            <button 
              className={`profile__button profile__button_action_edit ${isValid && !isCurrentInfo ? 'animation' : ''}`}
              type="submit"
              disabled={!isValid || isCurrentInfo}
            >
              Редактировать
            </button>
            <button 
              className="profile__button profile__button_action_logout animation"
              type="button"
              onClick={onLogout}
            >
              Выйти из аккаунта
            </button>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Profile;
