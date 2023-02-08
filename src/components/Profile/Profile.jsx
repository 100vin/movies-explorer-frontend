import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState } from 'react';


const Profile = ({ onUserEdit, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({ 
    name: currentUser.name, 
    email: currentUser.email, 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserEdit(values);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value }); 
  }

  return (
    <main className="main profile">
      <section className="container profile__container">
        <form className="profile__form" action="/" name="profile" onSubmit={handleSubmit} >
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
                value={values.name}
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
                value={values.email}
                onChange={handleChange}
              />
            </label>
          </fieldset>
          <fieldset className="profile__fieldset profile__fieldset_type_buttons">
            <button 
              className="profile__button profile__button_action_edit animation"
              type="submit"
              onClick={onUserEdit}
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
