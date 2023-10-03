import React from 'react';

const ForgotPassword = ({ toggleMode }) => {
  return (
    <form action="" className="forgot-password-form">
      <h2 className="title">Forgot Password</h2>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <button className="btn solid" type="submit">
        Reset Password
      </button>
      <button className="btn transparent" onClick={toggleMode}>
        Sign In
      </button>
    </form>
  );
};

export default ForgotPassword;
