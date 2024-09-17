import { useState } from 'react';
import { auth } from '@root/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// local imports:
import eye from '@root/assets/svgs/eye.svg';
import eyeShut from '@root/assets/svgs/eyeShut.svg';

/*
    SignUp.jsx
*/
export default function SignUp({
  setSignUp,
  setSelectPlayer,
  setEmptyPlayers,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPass, setVerifyPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(null); // form message

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async event => {
    event.preventDefault();

    // password restrictions, 6 chars, 1 must be a number
    const passwordRegex = /^(?=.*[0-9])[A-Za-z\d]{6,}$/;

    if (password !== verifyPass) {
      setMsg('Passwords do not match.');
      return;
    }

    // regex password validation:
    if (!passwordRegex.test(password)) {
      setMsg(
        'Password must be at least 6 characters and contain at least 1 number.'
      );
      return;
    }

    // Firebase authentication
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setMsg('Success!');

      // on success, transition to SelectPlayer.jsx
      setTimeout(() => {
        setEmptyPlayers(true); // defaults to CreateNewPlayer.jsx
        setSelectPlayer(true); // player selection screen
        setSignUp(false);
      }, 1420);
    } catch (err) {
      if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
        setMsg('Account already in use.');
      } else {
        setMsg(err.message);
      }
    }
  };

  return (
    <form id="signup" className="flex-col align-center" onSubmit={handleSignUp}>
      <h2 className="center-text">Account Creation</h2>
      <hr />
      <div className="flex justify-center">
        <label htmlFor="email">Account Email:</label>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
      </div>
      <div className="flex justify-center">
        <label htmlFor="password">Set Password:</label>
        <div className="input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <img
            className="password-toggle"
            onClick={togglePasswordVisibility}
            style={{ cursor: 'pointer' }}
            src={showPassword ? eyeShut : eye}
            height={30}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <label htmlFor="verifyPass">Verify Password:</label>
        <div className="input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            value={verifyPass}
            onChange={({ target }) => setVerifyPass(target.value)}
            required
          />
          <img
            className="password-toggle"
            onClick={togglePasswordVisibility}
            style={{ cursor: 'pointer' }}
            src={showPassword ? eyeShut : eye}
            height={30}
          />
        </div>
      </div>
      {
        <span className="form-message flex align-end justify-center">
          {msg ? msg : null}
        </span>
      }
      <div className="flex justify-center">
        <button onClick={() => setSignUp(false)}>Go Back</button>
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
}
