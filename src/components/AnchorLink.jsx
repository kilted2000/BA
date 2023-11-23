//import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';

const AnchorLink = ({ children, href, className, icon, tabIndex }) => {
  return (
    <a href={href}>
      <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} >
        {children}
      </NavBarItem>
    </a>
  );
};

AnchorLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
export default AnchorLink;

