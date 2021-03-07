export interface Commnet {
  id: number;
  body: string;
  postId: number;
}

export interface CommnetCreate {
  postId: number;
  body: string;
}

export interface Post {
  id?: number;
  tille: string;
  body: string;
  comment?: Commnet[];
}

export interface PostSate {
  posts: Post[];
  currentPost: Post | null;
  error: string;
}

export enum PostActionTypes {
  FETCH_ALL = 'POST/FETCH_ALL',
  FETCH = 'POST/FETCH',
  ERROR = 'POST/ERROR',
  CREATE = 'POST/CREATE',
  COMMENT_CREATE = 'POST/COMMENT_CREATE',
}

interface FetchAllPosts {
  type: PostActionTypes.FETCH_ALL;
  payload: Post[];
}

interface PostFetch {
  type: PostActionTypes.FETCH;
  payload: Post;
}

interface PostError {
  type: PostActionTypes.ERROR;
  payload: string;
}

interface PostCreate {
  type: PostActionTypes.CREATE;
  payload: Post;
}

interface PostCommentCreate {
  type: PostActionTypes.COMMENT_CREATE;
  payload: Commnet;
}

export type PostActions = FetchAllPosts | PostFetch | PostError | PostCreate | PostCommentCreate;
