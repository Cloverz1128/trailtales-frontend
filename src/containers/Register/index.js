import Header from '@components/Header';
import { useEffect, useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import { registerUser } from '@services/register';
import Show from '@components/Show';
import { Toast } from 'antd-mobile';

const STEP = {
  ONE: 1,
  TWO: 2,
};

const Register = () => {

  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState({});

  const gotoNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = async (password) => {
    const { username, email } = userInfo;
    const payload = {
      username,
      email,
      password,
    };
    try {
      const res = await registerUser(payload);

      if (res?.success) {
        Toast.show({
          icon: 'success',
          content: 'Registration successful.',
        });
      } else {
        Toast.show({
          icon: 'fail',
          content: res?.message || 'Registration failed.',
        });
      }
    } catch (error) {
      const data = error?.response?.data;

      // get error info from api response
      const detailedError =
        data?.errors?.message?.[0] ||
        data?.message ||
        error?.message ||
        'Service call failed.';

      Toast.show({
        icon: 'fail',
        content: detailedError,
      });

      console.error('Registration error:', error);
    }
  };

  const onClickClose = () => {
    setStep(STEP.ONE);
  };

  return (
    <div>
      <Header onClickClose={onClickClose} />
      <Show visible={step === STEP.ONE}>
        <StepOne gotoNextStepHandler={gotoNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO}>
        <StepTwo
          userInfo={userInfo}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  )
}

export default Register;