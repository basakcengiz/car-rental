import App from './App.tsx';
import './index.css';

import store from './store/store';
const persistor = persistStore(store);

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './i18n/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
