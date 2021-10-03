import { createStore, combineReducers } from 'redux';

import postsReducer from './posts';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  posts: postsReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
