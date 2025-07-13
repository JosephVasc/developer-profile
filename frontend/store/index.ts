import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 