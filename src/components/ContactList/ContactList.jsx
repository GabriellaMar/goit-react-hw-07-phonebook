import styles from './ContactList.module.css'
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';


export const ContactList = ({ filteredContacts }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContactThunk(contactId));
     }

    return (
            <ul className={styles.contactList}>
                 {filteredContacts.length === 0 && <p>There are no contacts found!</p>}
                {filteredContacts.length > 0 && filteredContacts.map(contact => (
                    <li className={styles.contactItem} key={contact.id}>{contact.name}: &nbsp;&nbsp; {contact.phone}
                        <button type="button" className={styles.deleteContactBtn}
                            onClick={ () => handleDeleteContact(contact.id)}>
                            Delete</button>
                    </li>
                ))}

            </ul>
    )
}

 ContactList.propTypes ={
     filteredContacts: PropTypes.array.isRequired,
 }