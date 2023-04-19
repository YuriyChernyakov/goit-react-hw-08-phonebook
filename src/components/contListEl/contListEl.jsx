import PropTypes from 'prop-types';
import css from '../styles.module.css';

export default function ContactListEl ({ delCont, name, phone, id }) {
  return (
    <li className="contact-item">
      <p className={css.textCont}>{name} - {phone}
        <button className={css.delBut} type='button' onClick={() => delCont(id)}>Delete</button>
      </p>
      
    </li>
  );
};

ContactListEl.propTypes = {
    delCont: PropTypes.func,
    phone: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
