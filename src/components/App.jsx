import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import AddContForm from './addContForm/addContForm';
import ContList from './contList/contList';
import SearchFilter from './searchFilter/searchFilter';
import css from './styles.module.css';

export default function App() {
  const KEY_STORAGE = 'contacts';
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY_STORAGE)) ?? [
      {
        id: 'id-1',
        name: 'Rosie Simpsonttt',
        number: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ]
  });
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = (event) => {
    setName(event.currentTarget.value );
  };

  const handleNumChange = (event) => {
    setNumber(event.currentTarget.value );
  };

  const addArr = () => {
    const control = contacts.find(item => {
      return contacts.includes(item.name.toLowerCase())
    })

    if (control) {
      return alert('Warning');
    }

   setContacts(prevContact => [
      ...prevContact,
      { name, number, id: nanoid(3) },
    ]);
  };
  const handleSearch = (e) => {
    const { value } = e.target;

    setFilter(
      value.toLowerCase(),
    );
  };

  const deleteCont = (id) => {
    setContacts(
      contacts.filter(contact => contact.id !== id),
    );
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