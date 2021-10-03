interface AplicationFavoritesState {
  map: any;
  filter: any;
  [0]: { id: number; title: string; body: string; favorite: boolean };
}

const INITIAL_STATE: AplicationFavoritesState = [
  {
    id: 1,
    title: 'título qualquer',
    body: 'cachorrada',
    favorite: true,
  },
  {
    id: 2,
    title: 'título qualquer',
    body: 'cachorrada',
    favorite: true,
  },
];

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

interface IAddFavorite {
  id: number;
  title: string;
  body: string;
  favorite: boolean;
}

export function addFavorite(favorite: IAddFavorite) {
  return { type: 'ADD_FAVORITE', favorite };
}

export function delPost(id: number) {
  return { type: 'DEL_FAVORITE', id };
}
