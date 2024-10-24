import { useState } from 'react';
import { auth } from '@root/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

// local imports:
import Tipbox from '@root/components/Tipbox/Tipbox.jsx';
import Alertbox from '@root/components/Alertbox/Alertbox.jsx';
import eye from '@root/assets/svgs/eye.svg';
import eyeShut from '@root/assets/svgs/eyeShut.svg';

/*
    SignUp.jsx
*/
export default function SignUp({ setSignUp, setSelectPlayer }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPass, setVerifyPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(null); // form message

  const handleSignUp = async event => {
    event.preventDefault();

    // password restrictions, at least 6 characters and contains at least 1 number
    const passwordRegex = /^(?=.*\d).{6,}$/;

    // email check
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if (email.length < 1 || !emailRegex.test(email)) {
      setMsg('Please enter a valid email address.');
      return;
    }

    if (password !== verifyPass) {
      setMsg('Passwords do not match.');
      return;
    }

    // regex password validation:
    if (!passwordRegex.test(password)) {
      setMsg('Password must contain at least 6 characters and 1 number.');
      return;
    }

    // Firebase authentication
    try {
      // create new user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // email verification
      await sendEmailVerification(userCredential.user);

      setMsg('Success!');

      // on success, transition to SelectPlayer.jsx
      setTimeout(() => {
        setSelectPlayer(true); // player selection screen
        setSignUp(false);
      }, 1420);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setMsg('Account already in use.');
      } else if (err.code === 'auth/invalid-email') {
        setMsg('Please enter a valid email address.');
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
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div className="flex justify-center">
        <label htmlFor="password">Set Password:</label>
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
      </div>
      <div className="flex justify-center">
        <label htmlFor="verifyPass">Verify Password:</label>
        <div className="input-wrapper">
          <input
            id="verifyPass"
            type={showPassword ? 'text' : 'password'}
            value={verifyPass}
            onChange={({ target }) => setVerifyPass(target.value)}
          />
          <img
            className="password-toggle"
            onClick={() => setShowPassword(prev => !prev)}
            style={{ cursor: 'pointer' }}
            src={showPassword ? eyeShut : eye}
            height={30}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={() => setSignUp(false)}>Go Back</button>
        <button type="submit">Create Account</button>
      </div>
      {msg ? (
        <Alertbox text={msg} />
      ) : (
        <Tipbox
          text={
            'Your password should contain at least 6 characters and 1 number.'
          }
        />
      )}
    </form>
  );
}
