import PropTypes from 'prop-types';

export const AddContForm = ({ inpChange, numChange, newArr }) => {
    return (
        <div>
            <form>
                <label>
                    Name
                    <input
                        onChange={inpChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <br />
                <label>
                    Number
                    <input
                        onChange={numChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
            </form>
            <button type="submit" onClick={() => { newArr()}}>
                Add contact
            </button>
        </div>)
};

AddContForm.propTypes = {
    inpChange: PropTypes.func.isRequired,
    numChange: PropTypes.func.isRequired,
    newArr: PropTypes.func.isRequired
};