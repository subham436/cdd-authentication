

import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn,  } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const SignIn = ({ toggleMode, toggleForgotPassword }) => {
  // const [email, setEmail] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form action="" className="sign-in-form">
      <h2 className="title">Sign In</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <button className="btn solid" type="submit" onClick={handleSubmit}>
        Login
      </button>
      <p className="forgot-password-text" onClick={toggleForgotPassword}>
        Forgot Password?
      </p>
      <p className="social-text">Or</p>
      <div className="social-media">
        <a href="/" className="social-icon">
          <FcGoogle />
        </a>
        <a href="/" className="social-icon-linkedin">
          <FaLinkedinIn />
        </a>
        <a href="/" className="social-icon">
          <FaGithub />
        </a>
        <a href="/" className="social-icon-facebook">
          <FaFacebookF />
        </a>
      </div>
      <button className="btn transparent" onClick={toggleMode}>
        Sign Up
      </button>
    </form>
  );
};

export default SignIn;
