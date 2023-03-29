import PropTypes from 'prop-types';
import css from '../styles.module.css';

export default function SearchFilter ({ title = 'Search field', searchValue = '', onSearch }) {
  return (
    <div className={css.filter}>
        <span className={css.textFind}>{title}</span>
      <input
          className={css.inpFind}
          onChange={onSearch}
          type="text"
          name="find"
          value={searchValue}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
    </div>
  );
};

SearchFilter.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
