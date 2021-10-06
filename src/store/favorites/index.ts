interface AplicationFavoritesState {
  map: any;
  filter: any;
  0?: { id: number; title: string; body: string; userId: number };
}

const INITIAL_STATE: AplicationFavoritesState = [];

export default function reducer(state: any = INITIAL_STATE, _action: any) {
  switch (_action.type) {
    case 'ADD_FAVORITE':
      return [...state, _action.favorite];
    case 'DEL_FAVORITE':
      return [...state.filter(data => data.id !== _action.id)];
    default:
      return state;
  }
}

interface IAddNewFavorite {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export function addFavorite(favorite: IAddNewFavorite) {
  return { type: 'ADD_FAVORITE', favorite };
}

export function delFavorite(id: number) {
  return { type: 'DEL_FAVORITE', id };
}
