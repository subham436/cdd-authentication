import React from 'react';


import {FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = ({ toggleMode }) => {
  return (
    <form action="" className="sign-up-form">
      <h2 className="title">Sign Up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <button className="btn solid" type="submit">
        Sign Up
      </button>
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        
        <a href="/" className="social-icon">
          <FcGoogle/>
        </a>
        <a href="/" className="social-icon-linkedin">
          <FaLinkedinIn/>
        </a>
        <a href="/" className="social-icon">
          <FaGithub/>
        </a>
        <a href="/" className="social-icon-facebook">
          <FaFacebookF/>
        </a>
        
      </div>
      <button className="btn transparent" onClick={toggleMode}>
        Sign In
      </button>
    </form>
  );
};

export default SignUp;
