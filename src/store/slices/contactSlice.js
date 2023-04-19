import { createSlice } from '@reduxjs/toolkit';

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
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
    ],
  },
  reducers: {
    setContacts: (state, action) => {
      const data = [...state.contacts, action.payload];
      state.contacts = data;
    },
    deleteContacts: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const {
  setContacts, deleteContacts,
} = contacts.actions;

export default contacts.reducer;