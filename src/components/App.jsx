
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/operations';
import { selectFilter, selectFilteredContacts } from 'redux/selectors';
// import { selectContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contacts.contacts.items);
    // const filter = useSelector((state) => state.filter.filter);
  // const contacts = useSelector(selectContacts);
  const isLoading = useSelector((state) => state.contacts.contacts.isLoading);
  const error = useSelector((state) => state.contacts.contacts.error);
   const contactsFilteredByName = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);


  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && !error && <b>  Loading...</b>}
      {error && <p>{error.message}</p>}

      <ContactForm 
        // filteredContacts={contactsFilteredByName} 
       />

      <h1>Contacts</h1>

      <Filter filter={filter} />

      <ContactList 
      // filteredContacts={contactsFilteredByName} 
      />
   
    </div>
  );
};

 // const filteredContacts = contacts.filter(
  //   (contact) => contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  // ) 