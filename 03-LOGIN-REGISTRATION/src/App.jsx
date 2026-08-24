import { useState } from 'react';
import './App.css';

import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function App() {
  const [loginPassword, setLoginPassword] = useState(false);
  const [registerPassword, setRegisterPassword] = useState(false);
  const [registerConfirm, setRegisterConfirm] = useState(false);

  return (
    <div className="container">
      {/* ================= Login Card ================= */}

      <div className="card">
        <h2>Login</h2>

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-box">
          <FaLock className="icon" />

          <input
            type={loginPassword ? 'text' : 'password'}
            placeholder="Enter your password"
          />

          <span
            className="eye"
            onClick={() => setLoginPassword(!loginPassword)}
          >
            {loginPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="option-box">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#">Forgot Password?</a>
        </div>

        <button className="btn">Login Now</button>

        <p className="bottom-text">
          Don't have an account?
          <a href="#"> Signup now</a>
        </p>
      </div>

      {/* ================= Registration Card ================= */}

      <div className="card">
        <h2>Registration</h2>

        <div className="input-box">
          <FaUser className="icon" />
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-box">
          <FaLock className="icon" />

          <input
            type={registerPassword ? 'text' : 'password'}
            placeholder="Create password"
          />

          <span
            className="eye"
            onClick={() => setRegisterPassword(!registerPassword)}
          >
            {registerPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="input-box">
          <FaLock className="icon" />

          <input
            type={registerConfirm ? 'text' : 'password'}
            placeholder="Confirm password"
          />

          <span
            className="eye"
            onClick={() => setRegisterConfirm(!registerConfirm)}
          >
            {registerConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <label className="terms">
          <input type="checkbox" />I accept all terms & conditions
        </label>

        <button className="btn">Register Now</button>

        <p className="bottom-text">
          Already have an account?
          <a href="#"> Login now</a>
        </p>
      </div>
    </div>
  );
}

export default App;
