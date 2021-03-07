import { PostActionTypes, Post, Commnet, PostActions } from './postTypes';

export const fetchAllPostAC = (payload: Post[]): PostActions => ({ type: PostActionTypes.FETCH_ALL, payload });

export const createPostAC = (payload: Post): PostActions => ({
  type: PostActionTypes.CREATE,
  payload,
});

export const fetchPostAC = (payload: Post): PostActions => ({ type: PostActionTypes.FETCH, payload });

export const errorPostAC = (payload: string): PostActions => ({ type: PostActionTypes.ERROR, payload });

export const createPostCommentAC = (payload: Commnet): PostActions => ({
  type: PostActionTypes.COMMENT_CREATE,
  payload,
});
