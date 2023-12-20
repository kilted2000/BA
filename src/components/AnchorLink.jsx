//import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';
import { Link } from "react-router-dom";

const AnchorLink = ({ children, href, className, icon, tabIndex }) => {
  return (
    <Link to={href}>
       <NavBarItem to={href} className={className} icon={icon} tabIndex={tabIndex} >
        {children}
      </NavBarItem>
    </Link>
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

