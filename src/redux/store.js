import { configureStore } from '@reduxjs/toolkit';

// 1. Importar el reducer
import { rootReducer } from './reducer';

// 2. Crear el store
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
