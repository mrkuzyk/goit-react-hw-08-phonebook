import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContact = createAsyncThunk('/contact/add', async credentials => {
    try {
        const { data } = await axios.post('/contacts', credentials);
        return data
    } catch (error) {
        console.log(error);
    }
});

export const getContacts = createAsyncThunk('/contact/add', async() => {
    try {
        const { data } = await axios.post('/contacts');
        return data
    } catch (error) {
        console.log(error);
    }
});