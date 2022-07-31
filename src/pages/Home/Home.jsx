import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/selectors";
import { useGetContactsQuery } from "redux/contactsSlice";
import s from './Home.module.css';

const Home = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const { data: contacts } = useGetContactsQuery(); // всі контакти
    const totalContacts = contacts?.length;

    return (
        <>
            <h1 className={s.title}>Welcome to Phone Book</h1>
            {isLoggedIn
                ?
                <>
                    {totalContacts >= 1
                        ? 
                        <h1 className={s.info}> <span className={s.infoAccent}>Your</span> contacts are waiting for <span className={s.infoAccent}>you</span></h1>
                        :
                        <h1 className={s.info}> Add <span className={s.infoAccent}>your</span> contacts</h1>
                    }
                </>
                :
                <>
                    <h1 className={s.info}>
                        <NavLink
                            to='/login'
                            className={s.infoAccent}
                        >
                            Login 
                        </NavLink>
                        &nbsp;or&nbsp;
                        <NavLink
                            to='/register'
                            className={s.infoAccent}
                        >
                            register
                        </NavLink>
                        &nbsp;to see contacts
                    </h1>
                </>
            }
        </>
    );
};

export default Home;