interface AplicationFavoritesState {
  map: any;
  filter: any;
  0?: { id: number };
}

const INITIAL_STATE: AplicationFavoritesState = [];

export default function reducer(state: any = INITIAL_STATE, _action: any) {
  switch (_action.type) {
    case 'ADD_FAVORITE':
      return [...state, { id: _action.favorite }];
    case 'DEL_FAVORITE':
      return [...state.filter(data => data.id !== _action.id)];
    default:
      return state;
  }
}

export function addFavorite(favorite: number) {
  return { type: 'ADD_FAVORITE', favorite };
}

export function delFavorite(id: number) {
  return { type: 'DEL_FAVORITE', id };
}
