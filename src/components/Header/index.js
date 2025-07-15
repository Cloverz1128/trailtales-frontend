import { CloseOutline } from 'antd-mobile-icons';
import logo from '@assets/logo.png';
import style from './index.module.scss';
import { useAppContext } from '@utils/context';

const Header = ({
  onClickClose,
}) => {
  const [store] = useAppContext();
  return (
    <div className={style.header}>
      {store.closeHeaderHandler && (
        <CloseOutline className={style.closeIcon} onClick={store.closeHeaderHandler}/>
      ) }
      <img src={logo} alt='twitter-logo' className={style.logo} />
    </div>
  )
};

export default Header;