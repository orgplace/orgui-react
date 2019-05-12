import classNames from 'classnames';
import React from 'react';

interface OuiSwitchAttributes {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const OuiSwitch: React.FC<React.HTMLAttributes<HTMLElement> & OuiSwitchAttributes> = (props) => {
  const {checked, onChange, ...labelProps} = props;
  return (
    <label {...labelProps} className={classNames(
      'ouiSwitch',
      props.className,
    )}>
      <input type="checkbox" className="ouiSwitch__input" checked={checked} onChange={onChange} />
      <span className="ouiSwitch__slider"></span>
    </label>
  );
}

export { OuiSwitch };
