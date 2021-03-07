import { PostActions, PostActionTypes, PostSate, Post } from './postTypes';
const initialState: PostSate = {
  posts: [],
  currentPost: null,
  error: '',
};

const postReducer = (state = initialState, action: PostActions): PostSate => {
  switch (action.type) {
    case PostActionTypes.FETCH_ALL:
      return { ...state, posts: action.payload };

    case PostActionTypes.FETCH:
      return { ...state, currentPost: action.payload };

    case PostActionTypes.CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case PostActionTypes.COMMENT_CREATE:
      return {
        ...state,
        posts: state.posts.map((post: Post) =>
          post.id === action.payload.postId ? { ...post, comment: [...post.comment, action.payload] } : post,
        ),
      };

    case PostActionTypes.ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default postReducer;
