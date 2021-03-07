import { fetchAllPostAC, errorPostAC, createPostAC, createPostCommentAC } from './postActions';
import { Api } from './../../api/api';
import { Dispatch } from 'react';
import { PostActions, Post, CommnetCreate } from './postTypes';

export const fetchAllPosts = () => async (dispatch: Dispatch<PostActions>) => {
  try {
    const { data } = await Api.post.fetchAll();

    dispatch(fetchAllPostAC(data));
  } catch (e: any) {
    dispatch(errorPostAC(e.message));
  }
};

export const fetchPostById = (id: number) => async (dispatch: Dispatch<PostActions>) => {
  try {
    const { data } = await Api.post.fetchAll();

    dispatch(fetchAllPostAC(data));
  } catch (e: any) {
    dispatch(errorPostAC(e.message));
  }
};

export const createPost = (post: Post) => async (dispatch: Dispatch<PostActions>) => {
  try {
    const { data } = await Api.post.create(post);

    dispatch(createPostAC(data));
  } catch (e: any) {
    dispatch(errorPostAC(e.message));
  }
};

export const createPostComment = (comment: CommnetCreate) => async (dispatch: Dispatch<PostActions>) => {
  try {
    const { data } = await Api.post.commentCreate(comment);

    dispatch(createPostCommentAC(data));
  } catch (e: any) {
    dispatch(errorPostAC(e.message));
  }
};
