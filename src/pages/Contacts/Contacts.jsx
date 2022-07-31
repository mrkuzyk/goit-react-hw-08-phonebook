import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import s from './Contacts.module.css'
import { useGetContactsQuery } from "redux/contactsSlice";
import Loader from 'components/Loader/Loader';
import TotalContacts from 'components/TotalContacts/TotalContacts';

const Contacts = () => {
    const { data: contacts, error, isLoading } = useGetContactsQuery(); // всі контакти

    return (
        <div className= "container">
            {/* <div className={s.filter}>
                <Filter />
            </div> */}
            <div className={s.contactsContainer}>
                <div className={s.leftSide}>
                    <h1 className={s.title}>Add contact</h1>
                    <ContactForm />
                    <Filter />
                    <TotalContacts/>
                </div>
                <div className={s.rightSide}>
                    <h2 className={s.title}>Contacts</h2>
                    
                    {error && <h1>{error}</h1>}
                    {isLoading && <Loader />}
                    {contacts && <ContactList />}
                </div>
            </div>
        </div>   
    );
};

export default Contacts;