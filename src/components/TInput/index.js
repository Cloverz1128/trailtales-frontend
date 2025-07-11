import { Input } from 'antd-mobile';
import style from './index.module.scss'
import { useState } from 'react';
import PropTypes from 'prop-types';

/* Rich interactive input component */
const TInput = ({
  label,
  value,
  length,
  onChange
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
    setHide(true);
  }

  const onBlur = () => {
    if (length && value.length === 0) {
      setIsFocused(false);
    }
    // setIsFocused(true);
    setHide(false);
  }

  const onChangeHandler = (val) => {
    if (val.length > length) {
      return;
    }
    onChange(val);
  }
  return (
    <div className={hide ? style.tInputFocused : style.tInput}>
      <div className={isFocused ? style.labelFocused : style.label}>
        {label}
        {hide && length && (
          <span className={style.labelRight}>
            {value.length}/{length}
          </span>
        )}
      </div>
      <Input 
        className={isFocused ? style.inputItemFocused : style.inputItem} 
        onFocus={onFocus} 
        onBlur={onBlur} 
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

TInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TInput;