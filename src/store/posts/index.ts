interface AplicationPostState {
  map: any;
  0: { id: number; title: string; body: string };
}

const INITIAL_STATE: AplicationPostState = [
  {
    id: 1,
    title: 'título qualquer',
    body: 'cachorrada',
  },
  {
    id: 1,
    title: 'título qualquer',
    body: 'cachorrada',
  },
  {
    id: 1,
    title: 'título qualquer',
    body: 'cachorrada',
  },
];

export default function reducer(state = INITIAL_STATE, _action: any) {
  return state;
}
