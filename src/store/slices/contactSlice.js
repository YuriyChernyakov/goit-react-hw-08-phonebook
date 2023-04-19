import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from 'store/mockAPI';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   setContacts: (state, action) => {
  //     const data = [...state.contacts, action.payload];
  //     state.contacts = data;
  //   },
  //   deleteContacts: (state, action) => {
  //     state.contacts = action.payload;
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const index = state.contacts.findIndex(task => task.id === action.payload.id);
      state.contacts.splice(index, 1);
      state.isLoading = false;
      state.error = null;

    },
    [deleteContact.rejected]: handleRejected,
    
    [addContact.pending]: handlePending,

    [addContact.fulfilled](state, action) {
      state.contacts.unshift(action.payload)
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: handleRejected,},
});

export const {
  setContacts, deleteContacts,
} = contacts.actions;

export default contacts.reducer;