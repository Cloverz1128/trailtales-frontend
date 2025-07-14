import { CloseOutline } from 'antd-mobile-icons';
import logo from '@assets/logo.png';
import style from './index.module.scss';
import PropTypes from 'prop-types';

const Header = ({
  onClickClose,
}) => {
  return (
    <div className={style.header}>
      {onClickClose && <CloseOutline className={style.closeIcon} onClick={onClickClose}/>}
      <img src={logo} alt='twitter-logo' className={style.logo} />
    </div>
  )
};

Header.propTypes = {
  onClickClose: PropTypes.func,
};

Header.defaultProps = {
  onClickClose: null,
};

export default Header;