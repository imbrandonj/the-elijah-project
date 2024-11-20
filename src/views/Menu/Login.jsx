import { useState } from 'react';
import { auth } from '@root/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase sign in function

// local imports:
import { fetchPlayers } from '@root/services/playersService';
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';
import Alertbox from '@root/components/Alertbox/Alertbox.jsx';
import eye from '@root/assets/svgs/eye.svg';
import eyeShut from '@root/assets/svgs/eyeShut.svg';

/*
    Login.jsx
*/
export default function Login({
  setLogIn, // boolean, use state
  setSelectPlayer, // boolean, use state
  setPlayerProfiles, // fetched player profiles, use state array
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(null); // form message
  const [err, setErr] = useState(false); // if true, trigger alertbox

  const handleLogin = async event => {
    event.preventDefault();

    // password restrictions, at least 6 characters and contains at least 1 number
    const passwordRegex = /^(?=.*\d).{6,}$/;

    // email check
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if (email.length < 1 || !emailRegex.test(email)) {
      setErr(true);
      setMsg('Please enter a valid email address.');
      return;
    }

    // regex password validation:
    if (!passwordRegex.test(password)) {
      setErr(true);
      setMsg('Please enter a valid password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user.emailVerified) {
        setErr(false);
        setMsg('Success!');

        // on success, transition to SelectPlayer.jsx
        setTimeout(() => {
          // on successful login, transition to SelectPlayer.jsx
          setSelectPlayer(true);
          setLogIn(false);
        }, 1420);

        try {
          const playerData = await fetchPlayers();
          setPlayerProfiles(playerData);
        } catch (err) {
          setErr(true);
          setMsg(err.message || 'Failed to retrieve players.');
        }
      } else {
        setErr(true);
        setMsg('Email not verified. Verify your email before logging in.');
      }
    } catch (err) {
      setErr(true);
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
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <label htmlFor="password">Password:</label>
      <div className="input-wrapper">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <img
          className="password-toggle"
          onClick={() => setShowPassword(prev => !prev)}
          style={{ cursor: 'pointer' }}
          src={showPassword ? eyeShut : eye}
          height={30}
        />
      </div>
      <div className="">
        <button type="button" onClick={() => setLogIn(false)}>
          Go Back
        </button>
        <button type="submit">Log In</button>
      </div>
      {err ? (
        <Alertbox text={msg} />
      ) : msg ? (
        <Tipbox text={msg} />
      ) : (
        <Tipbox
          text={'Note: Please verify your email address before logging in.'}
        />
      )}
    </form>
  );
}
