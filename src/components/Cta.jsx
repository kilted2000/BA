"use client"
//import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBone } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";

const Cta = () => {
  const { loginWithRedirect } = useAuth0()

  
    return(    <div id="cta">
    <h3 className="cta-text">Find Your Furry Friends, Furry Friend Today.</h3>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faPaw} />   (
                    <a  onClick={() => loginWithRedirect()}>
                        Log In
                     
                    </a>
                  )
    </button>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faBone} />  Sign Up
    </button>
  </div>)

}


export default Cta