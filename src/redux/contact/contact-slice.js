// import {
//     createSlice,
//     // isFulfilled
// } from '@reduxjs/toolkit';
// import { addContact, getContacts } from './contact-operation';

// const initialState = {
//     contact: { name: '', email: '' },
// }

// const contactSlice = createSlice({
//     name: 'contact',
//     initialState,
//     extraReducers: {
//         [addContact.fulfilled](state, action) {
//             state.contact = action.payload.contact;
//         },
//         [getContacts.fulfilled](state, action) {
//             state.contact = action.payload.contact;
//         },
//         // [logIn.fulfilled](state, action) {
//         //     state.user = action.payload.user;
//         //     state.token = action.payload.token;
//         //     state.isLoggedIn = true;
//         // },
//         // [logOut.fulfilled](state, action) {
//         //     state.user = { name: null, email: null };
//         //     state.token = null;
//         //     state.isLoggedIn = false;
//         // }
//     }
// });

// export const contactReducer = contactSlice.reducer;