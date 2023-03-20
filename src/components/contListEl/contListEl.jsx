import React from 'react';
import PropTypes from 'prop-types';

export const ContactListEl = ({
  delCont,
  name,
  number,
  id,
}) => {
  return (
    <div className="contact-item">
      <p>{name} - <span>{number}</span></p>
      <button type='button' onClick={()=>delCont(id)}>Delete</button>
    </div>
  );
};

ContactListEl.propTypes = {
    delCont: PropTypes.func,
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
