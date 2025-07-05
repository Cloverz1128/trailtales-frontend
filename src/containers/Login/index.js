import {
  Button, Input, Form, Dialog,
} from 'antd-mobile';
import './index.css';

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    const values = form.getFieldsValue();
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        footer={(
          <Button block color="primary" onClick={onSubmit} size="large">
            Login
          </Button>
        )}
      >
        <Form.Item label="Username" name="username">
          <Input placeholder="Input username" clearable />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input placeholder="Input password" clearable type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
