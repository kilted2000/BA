"use client"
//import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
const NavBarItem = ({ children, href, className, icon, tabIndex }) => {
  const router = useRouter();
   const activeClass = 'navbar-item-active';
  const activeClasses = className ? `${className} ${activeClass}` : activeClass;

  return (
    <span className="d-inline-flex align-items-center navbar-item">
      {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
      <span className={router.asPath === href ? activeClasses : className} tabIndex={tabIndex} >
        {children}
      </span>
    </span>
  );
};
NavBarItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.object,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
};
export default NavBarItem;
