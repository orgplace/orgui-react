import classNames from 'classnames';
import React from 'react';

class OuiBreadcrumbItem extends React.Component<React.AnchorHTMLAttributes<HTMLAnchorElement>, {}> {
  render() {
    return (
      <a {...this.props} className={classNames(
        'ouiBreadcrumbItem',
        this.props.className,
      )}>{this.props.children}</a>
    );
  }
}

interface OuiBreadcrumbAttributes {
  children?: React.ReactElement<OuiBreadcrumbItem>[] | React.ReactElement<OuiBreadcrumbItem>
}

const OuiBreadcrumb: React.FC<React.HTMLAttributes<HTMLElement> & OuiBreadcrumbAttributes> = (props) => (
  <nav {...props} className={classNames(
    'ouiBreadcrumb',
    props.className,
  )}>{props.children}</nav>
);

export { OuiBreadcrumb, OuiBreadcrumbItem };
