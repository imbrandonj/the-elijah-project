import { useState } from 'react';

/*
    SignUp.jsx
*/
export default function SignUp({ setSignUp }) {
  const [email, setEmail] = useState('');
  const [playername, setPlayername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();
  };

  return (
    <form id="signup" className="flex" onSubmit={handleLogin}>
      <div className="flex-col align-end justify-center">
        <label htmlFor="email">Account Email:</label>
        <label htmlFor="password">Set Password:</label>
        <label htmlFor="playername">Verify Password:</label>
        <button onClick={() => setSignUp(false)}>Go Back</button>
      </div>
      <div className="flex-col justify-center">
        <input
          id="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <input
          id="password"
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <input
          id="playername"
          type="text"
          value={playername}
          onChange={({ target }) => setPlayername(target.value)}
        />
        <button type="submit">Create Account</button>
      </div>
    </form>
  );
}
