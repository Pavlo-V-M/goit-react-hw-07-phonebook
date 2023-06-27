
import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contactsOperations';



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
    addContactFulfilled: false,
    deleteContactFulfilled: false,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return { ...state, entities: action.payload };
    },
    [fetchContacts.pending]: (state, _) => {
      return { ...state, isLoading: true, error: null };
    },
    [fetchContacts.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    [addContacts.pending]: (state, _) => {
      return { ...state, addContactFulfilled: false };
    },
    [addContacts.fulfilled]: (state, _) => {
      return { ...state, addContactFulfilled: true };
    },
    [addContacts.rejected]: (state, _) => {
      return { ...state, addContactFulfilled: false };
    },
    [deleteContacts.pending]: (state, _) => {
      return { ...state, deleteContactFulfilled: false };
    },
    [deleteContacts.fulfilled]: (state, _) => {
      return { ...state, deleteContactFulfilled: true };
    },
    [deleteContacts.rejected]: (state, _) => {
      return { ...state, deleteContactFulfilled: false };
    },
  },
});

