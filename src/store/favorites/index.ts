interface AplicationFavoritesState {
  map: any;
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

export default function reducer(state = INITIAL_STATE, _action: any) {
  return state;
}
