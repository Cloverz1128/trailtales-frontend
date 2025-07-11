import { CloseOutline } from 'antd-mobile-icons';
import logo from '@assets/logo.png';
import style from './index.module.scss';

export default () => (
  <div className={style.header}>
    <CloseOutline className={style.closeIcon} />
    <img src={logo} alt='twitter-logo' className={style.logo} />
  </div>
);