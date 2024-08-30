import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createTransform, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* const encrypt = createTransform(
  (inboundState: Record<string, unknown>) => {
    return CryptoJS.AES.encrypt(JSON.stringify(inboundState), import.meta.env.DEMO_SECRET_KEY).toString();
  },
  (outboundState: string): Record<string, unknown> => {
    return JSON.parse(CryptoJS.AES.decrypt(outboundState, import.meta.env.DEMO_SECRET_KEY).toString(CryptoJS.enc.Utf8)) as Record<string, unknown>;
  }
); */

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    // TODO: persist states here (example: "user")
  ]
  /*   transforms: [encrypt] */
};

const reducer = combineReducers({
  // TODO: add reducers here
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;
