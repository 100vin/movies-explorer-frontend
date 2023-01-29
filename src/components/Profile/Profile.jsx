import './Profile.css';

const Profile = () => {
  return (
    <main className="main profile">
      <section className="container profile__container">
        <form className="profile__form" action="/" name="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <fieldset className="profile__fieldset profile__fieldset_type_inputs">
            <label className="profile__field">
              <span className="profile__field-name">Имя</span>
              <input
                className="profile__input"
                type="text"
                name="name"
                minLength={2}
                value="Виталий"
                required
              />
            </label>
            <label className="profile__field">
              <span className="profile__field-name">E-mail</span>
              <input
                className="profile__input"
                type="email"
                name="email"
                value="pochta@yandex.ru"
                required
              />
            </label>
          </fieldset>
          <fieldset className="profile__fieldset profile__fieldset_type_buttons">
            <button className="profile__button profile__button_action_edit animation" type="submit">Редактировать</button>
            <button className="profile__button profile__button_action_logout animation" type="button">Выйти из аккаунта</button>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Profile;
