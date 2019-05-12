import classNames from 'classnames';
import React from 'react';

const OuiOutput: React.FC<React.OutputHTMLAttributes<HTMLOutputElement>> = (props) => {
  return (
    <output {...props} className={classNames(
      'ouiOutput',
      props.className,
    )}>{props.children}</output>
  );
}

export { OuiOutput };
