import { Post, Commnet, CommnetCreate } from './../modules/post/postTypes';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
});

export const Api = {
  post: {
    fetchAll: (): Promise<AxiosResponse<Post[]>> => instance.get('posts'),
    fetchById: (id: number): Promise<AxiosResponse<Post>> => instance.get(`posts/${id}?_embed=comments`),
    create: (post: Post): Promise<AxiosResponse<Post>> => instance.post('posts', post),
    commentCreate: (comment: CommnetCreate): Promise<AxiosResponse<Commnet>> => instance.post('comments', comment),
  },
};
