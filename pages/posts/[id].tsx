import { Api } from '../../api/api';
import { GetServerSideProps } from 'next';
import { Post } from '../../modules/post/postTypes';

export default function PostPage({ serverPost }) {
  return (
    <div>
      <h1>{serverPost.title}</h1>
      <p>{serverPost.body}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await Api.post.fetchById(params.id);
  return {
    props: {
      serverPost: data,
    },
  };
};
