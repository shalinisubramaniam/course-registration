import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation (replace this with real authentication logic)
    if (email === 'test@test.com' && password === 'password') {
      // Call the onLogin callback with true to indicate successful login
      onLogin(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome</h2>
        <p>We are happy to have you back!</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/">Forgot password?</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        <div className="or-divider">
          <hr /> <span>Or</span> <hr />
        </div>
        <div className="social-login">
          <button className="google-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
            Sign In with Google
          </button>
        </div>
        <p className="signup-text">
          Don’t have an account? <a href="/">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
