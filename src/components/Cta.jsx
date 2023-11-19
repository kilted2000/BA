"use client"
//import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBone } from '@fortawesome/free-solid-svg-icons';


const Cta = () => {
  

  
    return(    <div id="cta">
    <h3 className="cta-text">Find Your Furry Friends, Furry Friend Today.</h3>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faPaw} />   (
                    <a href="/api/auth/login" tabIndex={0}>
                      Log in
                    </a>
                  )
    </button>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faBone} />  Sign Up
    </button>
  </div>)

}


export default Cta