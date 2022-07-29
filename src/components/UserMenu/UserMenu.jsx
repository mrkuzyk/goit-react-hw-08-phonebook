import { getUserEmail } from "redux/selectors";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "redux/auth/auth-operation";

const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(getUserEmail);
    return (
        <div>
            <h1>{email}</h1>
            <button type="submit" onClick={()=> dispatch(logOut())}>Logout</button>
        </div>
    );
};

export default UserMenu;