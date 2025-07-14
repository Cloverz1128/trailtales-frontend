import { Input } from 'antd-mobile';
import style from './index.module.scss'
import { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/* Rich interactive input component */
const TInput = forwardRef(({
  label,
  value,
  length,
  onChange
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
    setHide(true);
  }

  useEffect(() => {
    if (value) {
      setIsFocused(true);
      setHide(true);
    }
  }, []);

  const onBlur = () => {
    if (length && value.length === 0) {
      setIsFocused(false);
    }
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
            {value?.length}/{length}
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
});

TInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  length: PropTypes.number,
  onChange: PropTypes.func,
}

TInput.defaultProps = {
  label: '',
  value: undefined,
  length: undefined,
  onChange: () => {},
}

export default TInput;