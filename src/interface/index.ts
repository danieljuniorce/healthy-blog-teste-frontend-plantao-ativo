export interface IPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
  length?: number;
  0: { id: number; userId: number; title: string; body: string };
}

export interface IPostsResponse {
  data: { id: number; userId: number; title: string; body: string };
}
