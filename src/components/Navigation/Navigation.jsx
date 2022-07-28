import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import UserMenu from 'components/UserMenu/UserMenu'; 

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink
                to='/'
                // className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
            >
                Home
            </NavLink>
            <NavLink
                to='/contacts'
                // className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
            >
                Contacts
            </NavLink>
            <NavLink
                to='/register'
                // className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
            >
                Registration
            </NavLink>
            <NavLink
                to='/login'
                // className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
            >
                Login
            </NavLink>
            <UserMenu/>
        </nav>
    );
};

export default Navigation;