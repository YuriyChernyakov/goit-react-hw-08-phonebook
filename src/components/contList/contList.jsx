import { nanoid } from 'nanoid';
import ContactListEl from '../contListEl/contListEl';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

 

export default function ContList ({ delCont, contacts = [], filter }) {
  
  const renderSearchedItems = () => {
    return contacts.filter((item) => item.name.toLowerCase().includes(filter))
      .map((item) => <ContactListEl deleCont={delCont} key={nanoid(3)} {...item} />)
  }

  const renderDefaultItems = () => {
    return contacts.map((item) => <ContactListEl delCont={delCont} key={nanoid(3)} {...item} />)
  }

  return (
    <div className="contacts">
      <p className={css.text}>Contacts</p>
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