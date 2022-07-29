import { getUserEmail } from "redux/selectors";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "redux/auth/auth-operation";
import s from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(getUserEmail);
    return (
        <div className={s.userMenu}>
            <h1 className={ s.email }>{email}</h1>
            <button
                type="submit"
                onClick={() => dispatch(logOut())}
                className={s.button}
            >Logout</button>
        </div>
    );
};

export default UserMenu;