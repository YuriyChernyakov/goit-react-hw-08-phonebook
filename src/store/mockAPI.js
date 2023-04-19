import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://643fc7c23dee5b763e255e57.mockapi.io';

const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
       
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }

)
const addContact = createAsyncThunk('contacts/addContact',
    async (subscriber, { rejectWithValue }) => {
        try {
            const response = await axios.post("/contacts", subscriber);
            return response.data;
            
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
)

export {
    fetchContacts, addContact, deleteContact
}