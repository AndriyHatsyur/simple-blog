import { fetchAllPosts } from '../modules/post/postOperation';
import { NextThunkDispatch, wrapper } from '../modules/store';

export default function Home() {
  return <div>home</div>;
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchAllPosts());
});
