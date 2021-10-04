interface AplicationPostState {
  map: any;
  filter: any;
  0?: { id: number; title: string; body: string; userId: number };
}

const INITIAL_STATE: AplicationPostState = [];

export default function reducer(state: any = INITIAL_STATE, _action: any) {
  switch (_action.type) {
    case 'ADD_POST':
      let add = [...state, _action.post];
      return add;
    case 'DEL_POST':
      let del = [...state.filter(data => data.id !== _action.id)];

      return del;
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
