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
        <label for="email">Enter an Email:</label>
        <label for="password">Set a Password:</label>
        <label for="playername">Player Name:</label>
        <button type="submit">Create Player</button>
      </div>
      <div className="flex-col justify-center">
        <input
          name="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <input
          name="password"
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <input
          name="playername"
          type="text"
          value={playername}
          onChange={({ target }) => setPlayername(target.value)}
        />
        <button onClick={() => setSignUp(false)}>Go Back</button>
      </div>
    </form>
  );
}
