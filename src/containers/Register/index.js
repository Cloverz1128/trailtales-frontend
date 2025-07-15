import { useEffect, useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import { register } from '@services/register';
import Show from '@components/Show';
import { Toast } from 'antd-mobile';
import { useAppContext } from '@utils/context';
import { useNavigate } from 'react-router-dom';

const STEP = {
  ONE: 1,
  TWO: 2,
};

const Register = () => {

  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState({});
  const [, setStore] = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (step === STEP.ONE) {
      setStore({
        closeHeaderHandler: () => navigate('/login'),
      });
    }
    if (step === STEP.TWO) {
      setStore({
        closeHeaderHandler: () => setStep(STEP.ONE),
      });
    }
  }, [navigate, setStore, step]);


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
      const res = await register(payload);

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

  return (
    <div>
      <Show visible={step === STEP.ONE} isMount={false}>
        <StepOne gotoNextStepHandler={gotoNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO} isMount>
        <StepTwo
          userInfo={userInfo}
          goToOneStepHandler={() => setStep(STEP.ONE)}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  )
}

export default Register;