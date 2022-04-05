import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ModulePositionReducer } from './slices/ModulePositionSlice';
import { GhostImageReducer } from './slices/GhostImageSlice';
import { CurrentModuleReducer } from './slices/CurrentModuleSlice';
import { IsOverlappingReducer } from './slices/IsOverlappingSlice';

const reducer = {
  modulePosition: ModulePositionReducer,
  ghostImage: GhostImageReducer,
  currentModule: CurrentModuleReducer,
  isOverlapping: IsOverlappingReducer,
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // remove modulePosition from the array if you want to persist module positions after refresh
  blacklist: ['ghostImage', 'overlapping', 'currentModule', 'modulePosition', 'isOverlapping'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers(reducer));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
