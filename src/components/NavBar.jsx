"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPaw, faBone } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileForm from "./ProfileForm";
import PageLink from "./PageLink";
//import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="header hislop">
        <div id="title">
          <div className="container-fluid navcon">
            <Navbar light expand="lg" id="links">
              <NavbarBrand id="heading" href="/">
                <img
                  src="/assets/namenoback.png"
                  alt="BarkAmigos Title"
                  className="cover"
                />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="#footer">Contact</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pricing">Pricing</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#cta">Sign Up</NavLink>
                  </NavItem>
                  {!isLoading && !user && (
                    <NavItem id="qsLoginBtn" className="log">
                      <a
                        href="/api/auth/login"
                        className="btn btn-primary btn-margin"
                        
                        >
                        Log in
                      </a>
                      {/* turn buttons into navlinks */}
                      <button className="btn btn-primary btn-margin" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
                        sign up
                      </button>
                    </NavItem>
                  )}
                  {user && (
                    <>
                      <Nav
                        id="nav-mobile"
                        className="justify-content-between "
                        navbar
                      >
                        <NavItem>
                          <PageLink href={ ProfileForm }>My Profile</PageLink>
                        </NavItem>
                        <NavItem id="qsLogoutBtn">
                          <PageLink
                          href="/api/auth/logout"
                          className="btn btn-link p-1"
                         >
                          Log out
                        </PageLink>
                          <button className="btn btn-link p-1"
                            onClick={() =>
                              logout({
                                logoutParams: {
                                  returnTo: window.location.origin,
                                },
                              })
                            }
                          >
                            Log Out2
                          </button>
                        </NavItem>
                      </Nav>
                    </>
                  )}
                </Nav>
              </Collapse>
            </Navbar>

            {/* const Cta = () => {
  
  const { user, isLoading } = useUser();
  
    return(    <div id="cta">
    <h3 className="cta-text">Find Your Furry Friends, Furry Friend Today.</h3>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faPaw} />   {!isLoading && !user && (
                    <a href="/api/auth/login" tabIndex={0}>
                      Log in
                    </a>
                  )}
    </button>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faBone} />  Sign Up
    </button>
  </div>) */}

            {/* <div className="row">
              <div className="col-md-6 col-sm-12">
                <h1 className="big-heading mb-5">
                  Dog alking is Better with Two.
                </h1>
                <button
                  type="button"
                  className="btn btn-dark btn-lg download-button"
                >
                  <FontAwesomeIcon icon={faPaw} />{" "}
                  {!isLoading && !user && (
                    <a onClick={() => loginWithRedirect()}>
                      Sign In
                    </a>
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-dark btn-lg download-button"  onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
                  
                >
                  <FontAwesomeIcon icon={faBone} /> Sigmmn Up
                </button>
              </div>
              <div className="phone-img col-md-6 col-sm-12">
                <img
                  className="rotate_image img-fluid title-image"
                  src="/assets/img-clear.jpeg"
                  alt="logo-mockup"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;


// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const { user, isLoading } = useUser();
//     const toggle = () => setIsOpen(!isOpen);
    
//     console.log(user);
//     return (
//       <>
//         <div className="header hislop">
//           <div id="title">
//             <div className="container-fluid navcon" >
//                <Navbar light expand="lg" id="links" > 
//                  <NavbarBrand id="heading" href="/">
//                   <img src="public/namenoback.png" alt="BarkAmigos Title" className="cover" />
//                 </NavbarBrand>  
//                 <NavbarToggler onClick={toggle} />
//                 <Collapse isOpen={isOpen} navbar>
//                   <Nav className="me-auto" navbar>
//                     <NavItem>
//                       <NavLink href="#footer">Contact</NavLink>
//                     </NavItem>
//                     <NavItem>
//                       <NavLink href="#pricing">Pricing</NavLink>
//                     </NavItem>
//                     <NavItem>
//                       <NavLink href="#cta">Sign Up</NavLink>
//                     </NavItem>
//                     {!isLoading && !user && (
//                       // <NavItem id="qsLoginBtn" className='log'>
//                         <a
//                           href="/api/auth/login"
//                           className="btn btn-primary btn-margin"
                          
//                           >
//                           Log in
//                         </a>
//                       // </NavItem>
//                     )}
//                     {user && (
//                       <>
//                       <Nav
//                         id="nav-mobile"
//                         className="justify-content-between "
//                         navbar
//                        >
//                         <NavItem>
//                           <PageLink href="../profile.jsx">
//                             My Profile
//                           </PageLink>
//                         </NavItem>
//                         <NavItem id="qsLogoutBtn">
//                           <PageLink
//                             href="/api/auth/logout"
//                             className="btn btn-link p-1"
//                            >
//                             Log out
//                           </PageLink>
//                         </NavItem>
//                       </Nav>
//                       </>
//                     )}
//                   </Nav>
//                 </Collapse>
//               </Navbar>
  
//               <div className="row">
//                 <div className="col-md-6 col-sm-12">
//                   <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
//                   <button type="button" className="btn btn-dark btn-lg download-button">
//                     <FontAwesomeIcon icon={faPaw} />{' '}
//                     {!isLoading && !user && (
//                       <a href="/api/auth/login" tabIndex={0}>
//                         Sign In
//                       </a>
//                     )}
//                   </button>
//                   <button type="button" className="btn btn-dark btn-lg download-button">
//                     <FontAwesomeIcon icon={faBone} /> Sign Up
//                   </button>
//                 </div>
//                 <div className="phone-img col-md-6 col-sm-12">
//                   <img className="rotate_image img-fluid title-image" src="/img-clear.jpeg" alt="logo-mockup" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };