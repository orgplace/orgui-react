import classNames from 'classnames';
import React from 'react';

interface OuiInputCheckAttributes {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const OuiInputCheck: React.FC<React.HTMLAttributes<HTMLElement> & OuiInputCheckAttributes> = (props) => {
  const {checked, onChange, children, ...labelProps} = props;
  return (
    <label {...labelProps} className={classNames(
      'ouiInputCheck',
      props.className,
    )}>
      <input type="checkbox" className="ouiInputCheck__input" checked={checked} onChange={onChange} />
      <span className="ouiInputCheck__text">{children}</span>
    </label>
  );
}

export { OuiInputCheck };
