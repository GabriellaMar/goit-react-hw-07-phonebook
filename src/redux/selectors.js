import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter 

export const selectFilteredContacts = createSelector(
    [
        selectFilter, // ""
        selectContacts, // [{}, {}, {}, {}]
      ], 
       (filter, filteredContacts)=>{
        return filteredContacts.filter(
            (contact) => contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
          ) 
      }
)
// const filteredContacts = contacts.filter(
//     (contact) => contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
//   ) 