
import { Form } from 'antd-mobile';
import style from '../index.module.scss';
import DatePickerInput from '@components/DatePickerInput';
import TInput from '@components/TInput';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ACCOUNT_TYPE = {
  PHONE: 'phone',
  EMAIL: 'email',
};

const StepOne = ({
  gotoNextStepHandler,
}) => {
  const [form] = Form.useForm();
  const [formData] = useState({
    username: '',
    phone: '',
    email: '',
    birthday: '20250101',
  });

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.EMAIL); // set default as email
  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

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
      gotoNextStepHandler(validate);
    }
  }

  useEffect(() => {
    onValuesChange(); // validate after accountType change
  }, [accountType]);

  // TO-DO: footer button bugs when change between to use mail
  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
        return;
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setFooterButtonDisabled(false);
        return;
      }
      setFooterButtonDisabled(true);
    }
  }

  return <div>
    <div className={style.form}>
      <div className={style.formTitle}>Create your account</div>
      <Form
        form={form}
        initialValues={formData}
        onValuesChange={onValuesChange}
        className={style.formContainer
        }>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter a username." }]}
        >
          <TInput length={20} label="Username" />
        </Form.Item>
        {accountType === ACCOUNT_TYPE.PHONE && (
          <Form.Item
            name="phone"
            rules={[{
              required: true,
              message: "Please enter a valid phone number.",
              pattern: /^0?4\d{8}$/,
            }]}
          >
            <TInput length={10} label="Phone" />
          </Form.Item>
        )}
        {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item
            name="email"
            rules={[{
              required: true,
              message: "Please enter a valid email.",
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            }]}
          >
            <TInput label="Email" />
          </Form.Item>
        )}
        <span className={style.changeTypeButton} onClick={onAccountTypeChange}>
          {accountType === ACCOUNT_TYPE.EMAIL ? 'Use phone instead' : 'Use email instead'}
        </span>
        <div className={style.birthdayTitle}>Date of Birth</div>
        <div>This will not be shown publicly.</div>
        <Form.Item name="birthday">
          <DatePickerInput />
        </Form.Item>
      </Form>

    </div>

    <Footer label={'Next'} disabled={footerButtonDisabled} onClickNextStep={onClickNextStep} />

  </div>
}

StepOne.propTypes = {
  gotoNextStepHandler: PropTypes.func.isRequired,
}

export default StepOne;