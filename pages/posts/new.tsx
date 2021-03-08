import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Form/Input';
import { TextArea } from '../../components/Form/TextArea';
import { createPost } from '../../modules/post/postOperation';
import { Post } from '../../modules/post/postTypes';

export default function PostCreate() {
  const newPost: Post = {
    title: '',
    body: '',
  };

  const [post, setPost] = useState(newPost);

  const handleChange = (e) => {
    setPost((prevSate) => ({ ...prevSate, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const hendleSubmit = () => {
    dispatch(createPost(post));
    setPost({ title: '', body: '' });
  };

  return (
    <Form>
      <Input type="text" name="title" onChange={handleChange} value={post.title} />
      <TextArea name="body" onChange={handleChange} value={post.body} />
      <Button onClick={hendleSubmit}>Save</Button>
    </Form>
  );
}
