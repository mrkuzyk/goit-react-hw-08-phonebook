import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import s from './Contacts.module.css'
import { useGetContactsQuery } from "redux/contactsSlice";
import Loader from 'components/Loader/Loader';

const Contacts = () => {
    const { data: contacts, error, isLoading } = useGetContactsQuery(); // всі контакти

    return (
        <div className={s.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {error && <h1>{error}</h1>}
            {isLoading && <Loader />}
            {contacts && <ContactList />}
        </div>   
    );
};

export default Contacts;