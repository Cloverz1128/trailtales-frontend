import datepickerIcon from '../../assets/datepicker-icon.svg';
import style from './index.module.css';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitleItem}>Data of Birth</div>
    <div>
      <spam className={style.birthdayPlaceholder}>Year/Month/Day</spam>
      <img className={style.datepickerIcon} src={datepickerIcon} alt='datepickerIcon' />
    </div>
  </div>
);