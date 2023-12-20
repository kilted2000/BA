// //import React from 'react';

//import { Link } from "react-router-dom";
import NavBarItem from './NavBarItem';
import PropTypes from 'prop-types';
const PageLink = ({ children, className, icon, tabIndex, testId, to }) => {
  return (
   
      
        <NavBarItem to={to} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
          {children}
        </NavBarItem>
      
   
  );
};
PageLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
};
export default PageLink;
