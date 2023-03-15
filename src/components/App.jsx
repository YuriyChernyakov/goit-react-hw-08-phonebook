import { Component } from "react";
import { AddContForm } from './addContForm/addContForm';
// import { contList } from './contList/contList';
// import { contListEl } from './contListEl/contListEl';
// import { searchFilter } from './searchFilter/searchFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    name: "",
    number: "",
    filter: ""
  };

  handleInputChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  handleNumChange = (event) => {
    this.setState({ number: event.currentTarget.value });
  };
  
  addArr = () => {
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, number: this.state.number }
      ]
    }));
  };

  newContacts = () => this.state.contacts.map((item) => {
    return (
      <li>
      {item.name} - {item.number}
    </li>
    )
  })

  // handleFind = () => this.state.contacts.filter(({ name }) => {
  //   console.log(name);
  //   name.toLowerCase().includes(name)
  // })

  render() {
    const {
      addArr,
      handleNumChange,
      handleInputChange,
    } = this;
    return (<div>
          <p>Phonebook</p>
      <AddContForm
        newArr={addArr}
        numChange={handleNumChange}
        inpChange={handleInputChange} />
          <p>Contacts</p>
          <label>
            Find contacts by name
            <input
              onChange={this.handleFind}
              type="text"
              name="find"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
            />
      </label>
      <ul>
        {this.newContacts()}
        {/* {this.handleFind()} */}
          </ul>
        </div>
    );
  }
}

export default App;