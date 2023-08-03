
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useSelector } from 'react-redux';


export const App = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state)=>state.filter.filter);
 
  const filteredContacts =contacts.filter(contact =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()))

  return <div>
    <h1>Phonebook</h1>

    <ContactForm contacts={contacts} />

    <h1>Contacts</h1>

    <Filter filter={filter} />

    <ContactList filteredContacts={filteredContacts} />
  </div>
}


