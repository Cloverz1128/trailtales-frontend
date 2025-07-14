import {
  Button, Form, Dialog,
} from 'antd-mobile';
import { login } from '../../services/login';
import Header from '@components/Header';
import TInput from '@components/TInput';
import style from './index.module.scss';

const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const { username, password } = form.getFieldsValue();

    try {
      const res = await login(username, password);
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
    <>
      <Header />
      <div className={style.login}>

        <div className={style.formTitle}>Login to TrailTales</div>
        <Form
          form={form}
          className={style.formContainer}
        >
          <Form.Item name="username" rules={[{ required: true, message: "Please enter your username." }]}> 
            <TInput label="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please enter your password." }]}>
            <TInput label="Password" type="password" />
          </Form.Item>
          <Button className={style.footerButton} onClick={onSubmit}>
            Login
          </Button>
        </Form>
        <div className={style.goToRegister}>
          Don't have an account? <a href='/'>Register</a>
        </div>
      </div>
    </>
  );
};

export default Login;
