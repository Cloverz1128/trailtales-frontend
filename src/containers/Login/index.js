import {
  Button, Input, Form, Dialog,
} from 'antd-mobile';
import { loginService } from '../../services/login';
import './index.css';

const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = form.getFieldsValue();

    try {
      const res = await loginService(values.username, values.password);
      if (res.success) {
        Dialog.alert({
          content: <pre>{JSON.stringify(res.user, null, 2)}</pre>,
        });
      } else {
        Dialog.alert({
          content: res.message || 'An unknown success error occurred.',
        });
      }
    } catch (err) {
      if (err.response) {
        const data = err.response.data;
        const errorMessage = data.message || 'Login failed due to an unknown error.';

        Dialog.alert({
          content: errorMessage
        });

      } else {
        Dialog.alert({
          content: 'Network error. Please check your connection.'
        });
      }
    }

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
