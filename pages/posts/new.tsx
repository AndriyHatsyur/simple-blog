import { Button } from '../../components/Button';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Form/Input';
import { TextArea } from '../../components/Form/TextArea';

export default function PostCreate() {
  return (
    <Form>
      <Input type="text" name="title" />
      <TextArea name="body" />
      <Button>Save</Button>
    </Form>
  );
}
