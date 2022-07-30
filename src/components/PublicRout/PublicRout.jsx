import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/selectors";

export default function PublicRout() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>{ isLoggedIn ? <Navigate to='/contacts'/> : <Outlet/> }</>
    );
};
