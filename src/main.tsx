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
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { theme } from './theme.tsx';

/* const language = dayjs.locale(navigator.language);
console.log(language) */

createRoot(document.getElementById('root')!).render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <BrowserRouter>
            {/*         <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={language}> */}
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
            {/*         </LocalizationProvider> */}
         </BrowserRouter>
      </PersistGate>
   </Provider>,
);
