//import React from 'react';


import NavBarItem from './NavBarItem';
import PropTypes from 'prop-types';
const PageLink = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
    <a data-legacyBehavior href={href}>
      <a>
        <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
          {children}
        </NavBarItem>
      </a>
    </a>
  );
};
PageLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.object,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
};
export default PageLink;
