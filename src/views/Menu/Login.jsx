import { useState } from 'react';
import { auth } from '@root/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase sign in function

// local imports:
import eye from '@root/assets/svgs/eye.svg';
import eyeShut from '@root/assets/svgs/eyeShut.svg';

/*
    Login.jsx
*/
export default function Login({ setLogIn, setSelectPlayer }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(null); // form message

  const handleLogin = async event => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user.emailVerified) {
        // on successful login, transition to SelectPlayer.jsx
        setSelectPlayer(true);
        setLogIn(false);
      } else {
        setMsg('Email not verified. Verify your email before logging in.');
      }
    } catch (err) {
      setMsg('Failed to log in. Please check your credentials.');
    }
  };
  return (
    <form id="login" className="flex-col align-center" onSubmit={handleLogin}>
      <h2 className="center-text">Login</h2>
      <hr />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <div className="input-wrapper">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <img
          className="password-toggle"
          onClick={() => setShowPassword(prev => !prev)}
          style={{ cursor: 'pointer' }}
          src={showPassword ? eyeShut : eye}
          height={30}
        />
      </div>
      {
        <span className="form-message flex align-end justify-center">
          {msg ? msg : null}
        </span>
      }
      <div className="">
        <button onClick={() => setLogIn(false)}>Go Back</button>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
