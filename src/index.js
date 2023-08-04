import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={<p>loading...</p>} persistor={persistor}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>
);
