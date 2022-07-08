import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {reducer} from './store/store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);