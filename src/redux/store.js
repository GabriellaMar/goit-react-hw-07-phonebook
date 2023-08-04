// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { createStore } from "redux";
// import { rootReducer } from "./redusers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slice.js/contactsSlice";
import { filterReducer } from "./slice.js/filterSlice";

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
        // contacts: persistReducer(contactsPersistConfig, contactsReducer),
        filter: filterReducer
    },
});

// export const persistor = persistStore(store);


// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';
//   import storage from 'redux-persist/lib/storage';

  // const contactsPersistConfig = {
  //   key: 'contacts',
  //   storage,
  //   whitelist: ['contacts'],
  // };

  //     middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),