import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import { useGetContactsQuery } from "redux/contactsSlice";
import Loader from "./Loader/Loader";
import Hallo from "./Hallo";
import Contacts from "pages/Contacts/Contacts";
import Login from "pages/Login/Login";

export function App() {
  const { data: contacts, error, isLoading } = useGetContactsQuery(); // всі контакти

  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={ <Hallo/>} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Hallo/>} />
        </Routes>
      </Suspense>
    </>
  );
};
