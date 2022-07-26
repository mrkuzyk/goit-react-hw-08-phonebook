import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import { useGetContactsQuery, useDeleteContactMutation } from "redux/contactsSlice";
import { useSelector } from "react-redux";
import { getFilter } from 'redux/selectors';
import getVisibleContact from "helpers/getVisibleContact";

const ContactList = ({ onDeleteContact }) => {
    const { data: contacts } = useGetContactsQuery(); // всі контакти
    const totalContacts = contacts?.length;
    const [deleteContact] = useDeleteContactMutation();
    const filter = useSelector(getFilter);
    const filteredContacts = getVisibleContact(filter, contacts);

    const handleDeleteContact = (id) => {
        deleteContact(id)
    };
    
    return (
        totalContacts >= 1
            ?
            <ul className={s.list}>
                {filteredContacts.map(({ id, name, number }) =>
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onClick={() => handleDeleteContact(id)}
                    />
                )}
            </ul>
            :
            <p className={s.title}>You have no contacts yet</p>
            
    );
};

export default ContactList;