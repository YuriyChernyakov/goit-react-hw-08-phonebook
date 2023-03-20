import React from 'react';
import { nanoid } from 'nanoid';
import { ContactListEl } from '../contListEl/contListEl';
import PropTypes from 'prop-types';

 

export const ContList = ({
  delCont,
  contacts = [],
  filter
}) => {
  const renderSearchedItems = () => {
    return contacts.filter((item) => item.name.toLowerCase().includes(filter))
      .map((item) => <ContactListEl deleCont={delCont} key={nanoid(3)} {...item} />)
  }

  const renderDefaultItems = () => {
    return contacts.map((item) => <ContactListEl delCont={delCont} key={nanoid(3)} {...item} />)
  }

  return (
    <div className="contacts">
      <h3>Contacts</h3>
      <ul>
        {filter ? renderSearchedItems() : renderDefaultItems()}
      </ul>
    </div>
  );
};

ContList.propTypes = {
    delCont: PropTypes.func.isRequired,
    filter: PropTypes.func.isRequired,
    contacts: PropTypes.string.isRequired
};