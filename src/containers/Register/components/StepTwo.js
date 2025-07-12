
import { Input } from 'antd-mobile';
import style from '../index.module.scss';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StepTwo = ({
  confirmRegisterHandler,
  userInfo,
}) => {
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(true);

  const onConfirmRegister = (password) => {
    confirmRegisterHandler(password);
  };

  const onChangePwd = (val) => {
    setPassword(val);
  };

  // TO-DO: fix bug
  // when change first pwd, it won't show warning.
  const onChangeConfirmPwd = (val) => {
    if (val === password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  return (
    <div className={style.StepTwo}>
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <div className={style.showLabelContainer}>
          <div className={style.showLabel}>
            Name: 
            <span> {userInfo.name} </span>
          </div>
          {userInfo.email && (
          <div className={style.showLabel}>
            Email: 
            <span> {userInfo.email} </span>
          </div>
          )}
          {userInfo.tel && (
          <div className={style.showLabel}>
            Phone: 
            <span> {userInfo.phone} </span>
          </div>
          )}
          <div className={style.showLabel}>
            Date of Birth:
            <span>{userInfo.birthday}</span>
          </div>
        </div>
        <div className={style.label}>Please input your password: </div>
        <Input className={style.input} onChange={onChangePwd} />
        <div className={style.label}>Confirm your password: </div>
        <Input className={style.input} type="password" onChange={onChangeConfirmPwd} />
        {disabled && <div className={style.showTip}>Passwords do not match.</div>}
      </div>
      <Footer disabled={disabled} label="Confirm Register" onClickNextStep={onConfirmRegister} />
    </div>
  );
};

StepTwo.propTypes = {
  confirmRegisterHandler: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
};

export default StepTwo;