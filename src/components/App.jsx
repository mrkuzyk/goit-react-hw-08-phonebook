import {
  lazy,
  Suspense
} from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Header from './Header/Header';
import Loader from "./Loader/Loader";
// import Hallo from "./Hallo";
// import Contacts from "pages/Contacts/Contacts";
// import Login from "pages/Login/Login";
// import Register from "pages/Register/Register";
import { useEffect } from "react";
import { getCurrentUser } from "redux/auth/auth-operation"; 
import PrivateRout from "./PrivateRout/PrivateRout";
import PublicRout from "./PublicRout/PublicRout";

const Home = lazy(()=> import ('./Hallo'));
const Contacts = lazy(()=> import ('pages/Contacts/Contacts'));
const Register = lazy(()=> import ('pages/Register/Register'));
const Login = lazy(()=> import ('pages/Login/Login'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route element={<PublicRout />}>  
            <Route path='register' element={<Register/>} />
            <Route path='login' element={<Login />} />  
          </Route>
          <Route element={<PrivateRout />}>
            <Route path='contacts' element={<Contacts />} />          
          </Route>
          <Route path='*' element={<Home/>} />
        </Routes>
      </Suspense>
    </>
  );
};
