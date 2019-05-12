import classNames from 'classnames';
import React from 'react';
import { OuiColorVariationAttributes } from '.';

const OuiButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & OuiColorVariationAttributes> = (props) => {
  const {colorVariation, ...buttonProps} = props;
  return (
    <button {...buttonProps} className={classNames(
      'ouiButton',
      colorVariation,
      buttonProps.className,
    )}>{buttonProps.children}</button>
  );
}

const OuiLinkButton: React.FC<React.ButtonHTMLAttributes<HTMLAnchorElement> & OuiColorVariationAttributes> = (props) => {
  const {colorVariation, ...anchorProps} = props;
  return (
    <a {...anchorProps} className={classNames(
      'ouiButton',
      colorVariation,
      anchorProps.className,
    )}>{anchorProps.children}</a>
  );
}

export { OuiButton, OuiLinkButton };
