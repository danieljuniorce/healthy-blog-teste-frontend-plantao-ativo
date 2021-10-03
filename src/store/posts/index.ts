interface AplicationPostState {
  map: any;
  filter: any;
  0?: { id: number; title: string; body: string; userId: number };
}

const INITIAL_STATE: AplicationPostState = [
  {
    id: 102,
    title: 'Um título qualquer',
    body: 'Uma coisa qualquer',
    userId: 15,
  },

  {
    id: 104,
    title: 'Um título qualquer',
    body: 'Uma coisa qualquer',
    userId: 15,
  },
  {
    id: 105,
    title: 'Um título qualquer',
    body: 'Uma coisa qualquer',
    userId: 15,
  },
];

export default function reducer(state: any = INITIAL_STATE, _action: any) {
  switch (_action.type) {
    case 'ADD_POST':
      return [...state, _action.post];
    case 'DEL_POST':
      return [...state.filter(data => data.id !== _action.id)];
    default:
      return state;
  }
}

interface IAddPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function addPost(post: IAddPost) {
  return { type: 'ADD_POST', post };
}

export function delPost(id: number) {
  return { type: 'DEL_POST', id };
}
