import React from 'react';
import PropTypes from 'prop-types';

export const SearchFilter = ({
  title = 'Search field',
  searchValue = '',
  onSearch
}) => {
  return (
    <>
      <label>
        <span>{title}</span>
        <input
          onChange={onSearch}
          type="text"
          name="find"
          value={searchValue}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
    </>
  );
};

SearchFilter.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
