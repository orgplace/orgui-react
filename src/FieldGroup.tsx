import classNames from 'classnames';
import React from 'react';

interface OuiFieldGroupAttributes {
  label: React.ReactChild,
  required?: boolean,
  hazarding?: boolean,
  helpText?: React.ReactChild,
}

class OuiFieldGroup extends React.PureComponent<React.HTMLAttributes<HTMLElement> & OuiFieldGroupAttributes> {
  render() {
    const {label, required, hazarding, helpText, ...divProps} = this.props;
    return (
      <div className={classNames(
        'ouiFieldGroup',
        {
          'isRequired': required,
          'isHazarding': hazarding,
        },
        divProps.className,
      )}>
        <label className='ouiFieldGroup__label'>{label}</label>
        {this.renderChildren()}
        {this.renderHelpText()}
      </div>
    );
  }

  renderChildren() {
    const child = React.Children.only(this.props.children) as React.ReactElement;
    return React.cloneElement(child, {
      className: classNames(child.props.className, 'ouiFieldGroup__child'),
    });
  }

  renderHelpText() {
    const helpText = this.props.helpText;
    if (!helpText) {
      return null;
    }

    if (typeof helpText === 'string' || typeof helpText === 'number') {
      return (
        <div className='ouiFieldGroup__helpText'>help</div>
      );
    } else {
      return React.cloneElement(helpText, {
        className: classNames(helpText.props.className, 'ouiFieldGroup__helpText'),
      });
    }
  }
}


export { OuiFieldGroup };
