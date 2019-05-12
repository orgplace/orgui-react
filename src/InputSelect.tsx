import classNames from 'classnames';
import React from 'react';

const OuiInputSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return (
    <select {...props} className={classNames(
      'ouiInputSelect',
      props.className,
    )}>
      {props.children}
    </select>
  );
}

export { OuiInputSelect };
