import { useState } from 'react';

/*
    SignUp.jsx
*/
export default function SignUp({ setSignUp, setSelectPlayer }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPass, setVerifyPass] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async event => {
    event.preventDefault();

    if (password !== verifyPass) {
      setError('Passwords do not match');
      return;
    }

    setSelectPlayer(true); // transition to player selection
    setSignUp(false); // hide the sign up form
    setError(error.message);
  };

  return (
    <form id="signup" className="flex-col" onSubmit={handleSignUp}>
      <div className="flex justify-center">
        <label htmlFor="email">Account Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div className="flex justify-center">
        <label htmlFor="password">Set Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div className="flex justify-center">
        <label htmlFor="verifyPass">Verify Password:</label>
        <input
          id="verifyPass"
          type="password"
          value={verifyPass}
          onChange={({ target }) => setVerifyPass(target.value)}
        />
      </div>
      <div className="flex justify-center">{error && <span>{error}</span>}</div>
      <div className="flex justify-center">
        <button onClick={() => setSignUp(false)}>Go Back</button>
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
}
