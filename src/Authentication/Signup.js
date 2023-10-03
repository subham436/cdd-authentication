import React from 'react';


import {FaFacebookF, FaGithub, FaLinkedinIn,FaGoogle} from "react-icons/fa";

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
        
        <a href="#" className="social-icon">
          <FaGoogle/>
        </a>
        <a href="#" className="social-icon">
          <FaLinkedinIn/>
        </a>
        <a href="#" className="social-icon">
          <FaGithub/>
        </a>
        <a href="#" className="social-icon">
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
