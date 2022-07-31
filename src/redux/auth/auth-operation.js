import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token} `;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

export const register = createAsyncThunk('/auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data
    } catch (error) {
        return console.log(error);
    }
});

export const logIn = createAsyncThunk('/auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data
    } catch (error) {
        return console.log(error);
    }
});

export const logOut = createAsyncThunk('/auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return console.log(error);
    }
});

export const getCurrentUser = createAsyncThunk('/auth/refresh', async (_ , thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

        // console.log('1', persistedToken)

    if (!persistedToken){
        return thunkAPI.rejectWithValue();
        // return state;
    }

    // console.log('2', persistedToken)
    token.set(persistedToken);
    try {
        const { data } = await axios.get('/users/current');
        // console.log('data', data)
        return data;
    } catch (error) {
        return console.log(error);
    }
});