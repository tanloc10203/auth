import { configureStore } from '@reduxjs/toolkit'
import rootReduces from './rootReduces';

const store = configureStore({
  reducer: rootReduces,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;