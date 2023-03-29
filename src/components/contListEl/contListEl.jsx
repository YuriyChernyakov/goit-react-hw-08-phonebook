import PropTypes from 'prop-types';
import css from '../styles.module.css';

export default function ContactListEl ({ delCont, name, number, id }) {
  return (
    <li className="contact-item">
      <p className={css.textCont}>{name} - {number}
        <button className={css.delBut} type='button' onClick={delCont(id)}>Delete</button>
      </p>
      
    </li>
  );
};

ContactListEl.propTypes = {
    delCont: PropTypes.func,
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
