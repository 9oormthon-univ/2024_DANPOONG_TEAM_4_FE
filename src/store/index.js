import { configureStore, combineReducers } from '@reduxjs/toolkit';

import currentLocationReducer from './features/current-location-reducer';

const rootReducer = combineReducers({
  location: currentLocationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
});
