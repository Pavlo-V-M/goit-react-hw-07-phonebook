import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';

import { contactsSlice } from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    valueFilter: filterSlice.reducer,
  },

});
