
import {
  Button, Input, 
} from 'antd-mobile';
import style from './index.module.css';
import DatePickerInput from '@components/DatePickerInput';
import Header from '@components/Header';

const Register = () => {

  return <div>
    <Header />
    <div className={style.form}>
      <div className={style.formTitle}>Create your account</div>
      <Input placeholder="name" className={style.input}/>
      <Input placeholder="phone" className={style.input}/>
      <div className={style.changeTypeButton}>Use email instead</div>
      <div className={style.birthdayTitle}>Date of Birth</div>
      <div>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
      <DatePickerInput />
    </div>

    <div className={style.footer}>
      <Button className={style.footerButton}> Next</Button>
    </div>

  </div>
}

export default Register;