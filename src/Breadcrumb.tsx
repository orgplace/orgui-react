import classNames from 'classnames';
import React from 'react';

const OuiBreadcrumbItem: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => (
  <a {...props} className={classNames(
    'ouiBreadcrumbItem',
    props.className,
  )}>{props.children}</a>
);

const OuiBreadcrumb: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => (
  <nav {...props} className={classNames(
    'ouiBreadcrumb',
    props.className,
  )}>{props.children}</nav>
);

export { OuiBreadcrumb, OuiBreadcrumbItem };
