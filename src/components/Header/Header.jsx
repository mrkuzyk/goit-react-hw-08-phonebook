import AuthorizationMenu from "AuthorizationMenu/AuthorizationMenu";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import s from './Header.module.css';


const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    // console.log(isLoggedIn);

    return (
        <header>
            <div
                className={`container ${s.header}`}
            >
                <Navigation />
                {isLoggedIn ? <UserMenu/> : <AuthorizationMenu/>
}
            </div>
        </header>
    );
};

export default Header;