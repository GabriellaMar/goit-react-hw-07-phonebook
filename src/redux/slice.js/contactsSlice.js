
import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from 'redux/operations';

export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: '',
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
 
  extraReducers: builder =>
  builder
  .addCase(fetchContactsThunk.pending, (state) => {
    state.contacts.isLoading = true;
    state.contacts.error = null;
  })
  .addCase(fetchContactsThunk.fulfilled, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.items = action.payload;
    state.contacts.error = null;
  })
  .addCase(fetchContactsThunk.rejected, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  })
  .addCase(addContactThunk.pending, (state) => {
    state.contacts.isLoading = true;
    state.contacts.error = null;
  })
  .addCase(addContactThunk.fulfilled, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.items.push(action.payload);
    state.contacts.error = null;
  })
  .addCase(addContactThunk.rejected, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  })
  .addCase(deleteContactThunk.pending, (state) => {
    state.contacts.isLoading = true;
    state.contacts.error = null;
  })
  .addCase(deleteContactThunk.fulfilled, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.items = state.contacts.items.filter((contact) => contact.id !== action.payload.id);
    state.contacts.error = null;
  })
  .addCase(deleteContactThunk.rejected, (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  })
});

export const contactsReducer = contactSlice.reducer;





// export const contactsReducer = (state =initialState.contacts, action) =>{
// switch(action.type){
//     case 'contacts/addContacts':
//         return [...state, action.payload];

//     case 'contacts/deleteContacts':
//         return state.filter(contact => contact.id !== action.payload.id);

//         default:
//             return state;
// }
// }

// export const addContactAction = ({ name, number }) => ({
//     type: 'contacts/addContacts',
//     payload: {
//       name,
//       number,
//       id: nanoid(), 
//     },
//   });


// export const deleteContactAction = (contactId) => ({
//     type: 'contacts/deleteContacts',
//     payload: {
//       id: contactId, 
//     },
//   })