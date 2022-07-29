import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsApi} from './contactsSlice';
import { searchFilterReducer } from "./searchFilterSlice";
import { authReducer } from "./auth/auth-slice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

// const middleware = [
//     ...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }), contactsApi.middleware,
// ];

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: searchFilterReducer,
        // auth: authReducer,
        // contact: contactReducer,
    },
    middleware: getDefaultMiddleware =>
        [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), contactsApi.middleware,
] ,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
