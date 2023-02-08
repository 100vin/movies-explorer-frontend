import './SearchForm.css';
import { useEffect, useState } from 'react';

const SearchForm = ({ onSearch, isSavedPage = false }) => {
  const [values, setValues] = useState({ name: '', isShorts: false });

  useEffect(() => {
    const searchValues = JSON.parse(localStorage.getItem('search'));
    if (searchValues && !isSavedPage) {
      setValues(searchValues);
      onSearch(searchValues);
    } else {
      setValues({ name: '', isShorts: false });
      onSearch(values);
    }
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    const newValues = { ...values, [name]: checked };
    setValues(newValues);
    onSearch(newValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(values);
  }

  return (
    <section className="container search">
      <form className="search__form" name="search" onSubmit={handleSubmit}>
        <fieldset className="search__main-group">
          <label className="search__icon" />
          <input 
            className="search__input"
            type="text"
            name="name"
            placeholder="Фильм"
            required={!isSavedPage}
            value={values.name}
            onChange={handleChange}
          />
          <button className="search__button animation" type="submit" />
        </fieldset>
        <fieldset className="search__switch-group">
          <div className="search__switch switch">
            <input 
              className="switch__checkbox"
              type="checkbox"
              id="isShorts"
              name="isShorts"
              checked={values.isShorts}
              onChange={handleCheck}
            />
            <label className="switch__label" htmlFor="isShorts" />
            <label className="switch__text" htmlFor="isShorts">Короткометражки</label>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchForm;
