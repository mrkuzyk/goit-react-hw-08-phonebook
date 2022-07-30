import { NavLink } from 'react-router-dom';
import s from './AuthorizationMenu.module.css';

const AuthorizationMenu = () => {
    return (
        <div className={s.nav}>
            <NavLink
                to='/register'
                className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
            >
                Registration
            </NavLink>
            <NavLink
                to='/login'
                className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
            >
                Login
            </NavLink>
        </div>
    );
};

export default AuthorizationMenu;