import { useGetContactsQuery } from "redux/contactsSlice";
import s from './TotalContacts.module.css';

const TotalContacts = () => {
    const { data: contacts } = useGetContactsQuery(); // всі контакти
    const totalContacts = contacts?.length;

    return (
        <div className={s.box}>
            {contacts && <p className={s.title}>You have {totalContacts} {totalContacts === 1 ? `contact` : `contacts`} </p>}
        </div>
    );
};

export default TotalContacts;