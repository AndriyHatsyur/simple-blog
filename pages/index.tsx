import { fetchAllPosts } from '../modules/post/postOperation';
import { NextThunkDispatch, wrapper } from '../modules/store';
import { getAllPosts } from '../modules/post/postSelector';
import { useTypedSelector } from '../modules/useTypeSelector';
import { NavLink } from '../components/Nav/NavLink';
import { PostTitle } from '../components/Post/PostTitle';

export default function Home() {
  const posts = useTypedSelector(getAllPosts);

  return (
    <div>
      <NavLink href="/posts/new" title="Create new post" />
      {posts.map((post) => (
        <PostTitle key={post.id}>
          <NavLink {...{ href: `posts/${post.id}`, title: post.title }} />
        </PostTitle>
      ))}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchAllPosts());
});
