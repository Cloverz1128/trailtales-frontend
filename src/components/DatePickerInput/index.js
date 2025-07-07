import datepickerIcon from '@assets/datepicker-icon.svg';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import PropTypes from 'prop-types';
import style from './index.module.css';
import { useState } from 'react';

const DatePickerInput = ({
  value,
  onChange
}) => {
  const [visible, setVisible] = useState(false);
  const onClickDatePicker = () => {
    setVisible(true);
  };
  return (
    <>
      <DatePicker
        title="Date Selector"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={(val) => {
          console.log(val)
          onChange(val);
        }}
      />
      <div className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayTitleItem}>Data of Birth</div>
        <div>
          <span className={style.birthdayPlaceholder}> { value ? moment(value).format('YYYY/MM/DD') : 'Year/Month/Day'}</span>
          <img className={style.datepickerIcon} src={datepickerIcon} alt='datepickerIcon' />
        </div>
      </div>
    </>
  );
};

DatePickerInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default DatePickerInput;