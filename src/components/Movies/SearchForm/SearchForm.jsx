import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="container search">
      <form className="search__form" name="search">
        <fieldset className="search__main-group">
          <label className="search__icon" />
          <input 
            className="search__input"
            type="text"
            name="film"
            placeholder="Фильм"
            required
          />
          <button className="search__button animation" type="submit" />
        </fieldset>
        <fieldset className="search__switch-group">
          <div className="search__switch switch">
            <input 
              className="switch__checkbox"
              type="checkbox"
              id="shorts"
              name="shorts"
            />
            <label className="switch__label" htmlFor="shorts" />
            <label className="switch__text" htmlFor="shorts">Короткометражки</label>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchForm;
