import { nanoid } from 'nanoid';
import { useState } from 'react';
import AddContForm from './addContForm/addContForm';
import ContList from './contList/contList';
import SearchFilter from './searchFilter/searchFilter';
import css from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, deleteContacts } from 'store/slices/contactSlice';
import { setFilter } from 'store/slices/filterSlice';

export default function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector((state) => state.contacts);
  const {filter} = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  
  const handleInputChange = (event) => {
    setName(event.currentTarget.value );
  };

  const handleNumChange = (event) => {
    setNumber(event.currentTarget.value );
  };

  const addArr = () => {
    const control = contacts.find(item => {
      return item.name.toLowerCase().includes(name.toLowerCase())
    })

    if (control) {
      return alert('Warning');
    }

    const newContact = {id: nanoid(3), name, number}
    dispatch(setContacts(newContact))
  }

  const handleSearch = (e) => {
    const { value } = e.target;

    dispatch(setFilter(
      value.toLowerCase(),
    ));
  };

  const deleteCont = (id) => {
    dispatch(deleteContacts(
      contacts.filter(contact => contact.id !== id),
    ));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Phonebook</p>
      <AddContForm
        newArr={addArr}
        numChange={handleNumChange}
        inpChange={handleInputChange}
      />

      <SearchFilter
        title={'Find contacts by name'}
        searchValue={filter}
        onSearch={handleSearch}
      />

      <ContList
        contacts={contacts}
        filter={filter}
        delCont={deleteCont}
      />
    </div>
  );
}