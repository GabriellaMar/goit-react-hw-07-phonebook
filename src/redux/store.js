// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { createStore } from "redux";
// import { rootReducer } from "./redusers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slice.js/contactsSlice";
import { filterReducer } from "./slice.js/filterSlice";

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

  const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
  };

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
        filter: filterReducer
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

export const persistor = persistStore(store);