import classNames from 'classnames';
import React from 'react';
import { OuiColorVariationAttributes } from '.';

type OuiCardAttributes = React.HTMLAttributes<HTMLElement> & OuiColorVariationAttributes

const OuiCard: React.FC<OuiCardAttributes> = (props) => {
  const {colorVariation, ...divProps} = props;
  return (
    <div {...divProps} className={classNames(
      'ouiCard',
      colorVariation,
      divProps.className,
    )}>{
      React.Children.map(divProps.children, (child) => {
        const childElm = child as React.ReactElement;
        return React.cloneElement(childElm, {
          className: classNames(childElm.props.className, 'ouiCardItem'),
        })
      })
    }</div>
  );
}

const OuiShorthandCard: React.FC<OuiCardAttributes> = (props) => {
  const {colorVariation, ...divProps} = props;
  return (
    <div {...divProps} className={classNames(
      'ouiCard ouiCardItem',
      colorVariation,
      divProps.className,
    )}>{divProps.children}</div>
  );
}

export { OuiCard, OuiShorthandCard };
