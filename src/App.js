

import React, { useState } from 'react';
import './App.css';
import SignIn from './pages/LoginPage/Login';
import SignUp from './pages/SignupPage/Signup';
import ForgotPassword from './pages/ForgetPassPage/ForgotPassword';

function App() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
    setIsForgotPasswordMode(false);
  };

  const toggleForgotPasswordMode = () => {
    setIsForgotPasswordMode(!isForgotPasswordMode);
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUpMode ? (
            <SignUp toggleMode={toggleMode} />
          ) : isForgotPasswordMode ? (
            <ForgotPassword toggleMode={toggleMode} />
          ) : (
            <SignIn toggleMode={toggleMode} toggleForgotPassword={toggleForgotPasswordMode} />
          )}
        </div>
      </div>
      
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="btn transparent" onClick={toggleMode} id="sign-up-btn">
              Sign Up
            </button>
          </div>
          <img src="/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="btn transparent" onClick={toggleMode} id="sign-in-btn">
              Sign In
            </button>
          </div>
          <img src="/register.svg" className="image" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default App;
