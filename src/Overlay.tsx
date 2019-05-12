import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

interface OuiOverlayAttributes {
  rootElement: Element
}

const OuiOverlay: React.FC<React.HTMLAttributes<HTMLElement> & OuiOverlayAttributes> = (props) => {
  const {rootElement, ...divProps} = props
  return ReactDOM.createPortal(
    <div {...divProps} className={classNames(
      'ouiOverlay',
      divProps.className,
    )}>{divProps.children}</div>,
    rootElement,
  );
}

export { OuiOverlay };
