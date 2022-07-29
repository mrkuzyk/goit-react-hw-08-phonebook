import { /*lazy, */Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Loader from "./Loader/Loader";
import Hallo from "./Hallo";
import Contacts from "pages/Contacts/Contacts";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";

export function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={ <Hallo/>} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='register' element={<Register/>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Hallo/>} />
        </Routes>
      </Suspense>
    </>
  );
};
