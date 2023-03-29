import { nanoid } from "nanoid";
import { useState } from "react";
import AddContForm from './addContForm/addContForm';
import ContList from './contList/contList';
import SearchFilter from './searchFilter/searchFilter';
import css from './styles.module.css';

const KEY_STORAGE = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpsonttt", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
  ]);
  const [filter, setFilter] = useState("");

  // const componentDidMount = ()  => {
  //     if (localStorage.getItem(KEY_STORAGE)) {
  //       use({
  //         contacts: JSON.parse(localStorage.getItem(KEY_STORAGE)),
  //       });
  //     }
  //   }
  // const componentDidUpdate = (_, prevState) => {
  //     if (prevContacts !== setContacts) {
  //       localStorage.setItem(KEY_STORAGE, JSON.stringify(setContacts));
  //     }
  //   }

  const handleInputChange = (event) => {
    useState({ name: event.currentTarget.value });
  };


  const handleNumChange = (event) => {
    useState({ number: event.currentTarget.value });
  };

  const addArr = () => {
    const control = setContacts.find(item => {
      return setName.toLowerCase().includes(item.name.toLowerCase())
    })
    if (control) {
      return alert("Warning")
    }

    useState((prevState) => ({
      setContacts: [
        ...prevState,
        { name: setName, number: setNumber, id: nanoid(3) }
      ]
    }));
  };

  const handleSearch = (e) => {
    const { value } = e.target;

    useState({
      filter: value.toLowerCase()
    })
  }

  const deleteCont = (id) => {
    useState({
      setContacts: contacts.filter(contact => contact.id !== id)
    })
  };

  return
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
}
