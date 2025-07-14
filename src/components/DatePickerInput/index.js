import datepickerIcon from '@assets/datepicker-icon.svg';
import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import PropTypes from 'prop-types';
import style from './index.module.scss';
import { useState, forwardRef } from 'react';

const DatePickerInput = forwardRef(({ 
  value, 
  onChange 
}, ref) => {
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
          onChange(moment(val).format('YYYYMMDD'));
        }}
      />
      <div ref={ref} className={style.birthdayInput} onClick={onClickDatePicker}>
        <div className={style.birthdayTitleItem}>Date of Birth</div>
        <div>
          <span className={style.birthdayPlaceholder}>
            {value ? moment(value).format('YYYY/MM/DD') : 'Year/Month/Day'}
          </span>
          <img className={style.datepickerIcon} src={datepickerIcon} alt='datepickerIcon' />
        </div>
      </div>
    </>
  );
});

DatePickerInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

DatePickerInput.defaultProps = {
  value: '',
  onChange: () => {},
};

export default DatePickerInput;
