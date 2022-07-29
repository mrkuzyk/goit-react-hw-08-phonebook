import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <NavLink
                to='/'
                className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
            >
                Home
            </NavLink>
            <NavLink
                to='/contacts'
                className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
            >
                Contacts
            </NavLink>
        </nav>
    );
};

export default Navigation;