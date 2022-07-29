import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params })
//       return { data: result.data }
//     } catch (axiosError) {
//       let err = axiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }


export const contactsApi = createApi({
    reducerPath: 'phoneBook',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://connections-api.herokuapp.com/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
        
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
        }, 
    }),
    tagTypes: ['Contact', 'Auth'],
    endpoints: (builder) => ({
        // registerUser: builder.mutation({
        //     query: (name, email, password) => ({
        //         url: '/users/signup',
        //         method: 'POST',
        //         body: name, email, password
        //     }),
        //     invalidatesTags: ['Auth'],
        // }),
        // logIn: builder.mutation({
        //     query: (email, password) => ({
        //         url: '/users/login',
        //         method: 'POST',
        //         body: email, password
        //     }),
        //     invalidatesTags: ['Auth'],
        // }),
        // logOut: builder.mutation({
        //     query: () => ({
        //         url: '/users/logout',
        //         method: 'POST',
        //     }),
        //     invalidatesTags: ['Auth'],
        // }),
        getContacts: builder.query({
            query: () => ({
                url: '/contacts',
                method: 'GET'
            }),
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: (name, number) => ({
                url: '/contacts',
                method: 'POST',
                body: name, number,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const {
    // useRegisterUserMutation,
    // useLogInMutation,
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation
} = contactsApi;