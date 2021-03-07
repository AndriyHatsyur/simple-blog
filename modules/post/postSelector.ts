import { RootState } from './../rootReducer';
import { Post } from './postTypes';

export const getAllPosts = (state: RootState): Post[] => state.posts.posts;

export const getCurrentPost = (state: RootState): Post => state.posts.currentPost;

export const getPostError = (state: RootState): string => state.posts.error;

export const getPostById = (state: RootState, id: number): Post => state.posts.posts.find((post) => post.id === id);
