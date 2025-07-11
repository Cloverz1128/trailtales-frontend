
import {
  Button, Form,
} from 'antd-mobile';
import style from './index.module.scss';
import DatePickerInput from '@components/DatePickerInput';
import TInput from '@components/TInput';
import Header from '@components/Header';
import { useState } from 'react';

const ACCOUNT_TYPE = {
  PHONE: 'phone',
  EMAIL: 'email',
};

const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '20250101',
  });

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.PHONE); // set default as phone

  const onAccountTypeChange = (e) => {
    if (accountType === ACCOUNT_TYPE.PHONE) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.PHONE);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      // const data = form.getFieldValue();
      console.log(validate)
    }
    
  }

  return <div>
    <Header />
    <div className={style.form}>
      <div className={style.formTitle}>Create your account</div>
      <Form form={form} initialValues={formData} className={style.formContainer}>
        <Form.Item 
          name="name"
          rules={[{required: true, message: "What’s your name?"}]}
        >
          <TInput length={20} label="Name"/>
        </Form.Item>
        {accountType === ACCOUNT_TYPE.PHONE && (
          <Form.Item 
            name="phone"
            rules={[{required: true, message: "Please enter a valid phone number."}]}
          >
            <TInput length={10} label="Phone"/>
          </Form.Item>
        )}
        {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item 
            name="email"
            rules={[{required: true, message: "Please enter a valid phone email."}]}
          >
            <TInput label="Email" />
          </Form.Item>
        )}
        <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
          {accountType === ACCOUNT_TYPE.EMAIL ? 'Use phone instead' : 'Use email instead'}
        </div>
        <div className={style.birthdayTitle}>Date of Birth</div>
        <div>This will not be shown publicly.</div>
        <Form.Item name="birthday">
          <DatePickerInput />
        </Form.Item>
      </Form>

    </div>

    <div className={style.footer}>
      <Button className={style.footerButton} onClick={onClickNextStep}> Next</Button>
    </div>

  </div>
}

export default Register;