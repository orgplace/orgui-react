import classNames from 'classnames';
import React from 'react';

const OuiInputText: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input {...props} type="text" className={classNames(
      'ouiInputText',
      props.className,
    )} />
  );
}

export { OuiInputText };
