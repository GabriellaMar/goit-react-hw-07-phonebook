import styles from './ContactList.module.css'
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/slice.js/contactsSlice';
import { useDispatch } from 'react-redux';


export const ContactList = ({ filteredContacts }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = contactId => {
       // dispatch({type: 'contacts/deleteContacts', payload: { id: contactId },})
         dispatch(deleteContact(contactId))}
    return (
            <ul className={styles.contactList}>
                {filteredContacts.map(contact => (
                    <li className={styles.contactItem} key={contact.id}>{contact.name}: {contact.number}
                        <button type="button" className={styles.deleteContactBtn}
                            onClick={ ()=> handleDeleteContact(contact.id)}>
                            Delete</button>
                    </li>
                ))}

            </ul>
    )
}
ContactList.propTypes ={
    filteredContacts: PropTypes.array.isRequired,
}