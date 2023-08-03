
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'

export const initialState = {
  contacts: [],
  filter: '',
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action){
      // state.contacts = [...state.contacts, action.payload]
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action){
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },
   
  }

})

export const {addContact, deleteContact} = contactSlice.actions;
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