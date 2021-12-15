import { configureStore } from '@reduxjs/toolkit'
import rootReduces from './rootReduces';

const store = configureStore({
  reducer: rootReduces,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;