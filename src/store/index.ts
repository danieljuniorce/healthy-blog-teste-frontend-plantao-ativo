import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import postsReducer from './posts';
import favoritesReducer from './favorites';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  posts: postsReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
