import Header from '@components/Header';
import { useEffect, useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

const STEP = {
  ONE: 1,
  TWO: 2,
};

const Register = () => {

  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState();

  const gotoNextStepHandler = (data) => {
    console.log(data)
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = (password) => {
    console.log({password, ...userInfo});
  };

  return <div>
    <Header />
    {step === STEP.ONE && <StepOne gotoNextStepHandler={gotoNextStepHandler} />}
    {step === STEP.TWO &&<StepTwo userInfo={userInfo} confirmRegisterHandler={confirmRegisterHandler} />}
  </div>
}

export default Register;