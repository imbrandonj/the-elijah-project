import { useState } from 'react';

/*
    SignUp.jsx
*/
export default function SignUp({ setSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();
  };
  return (
    <form className="flex-col align-center" onSubmit={handleLogin}>
      <label for="username">Create a Username:</label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label for="password">Set a Password:</label>
      <input
        name="password"
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <div className="flex">
        <button type="submit">Create User</button>
        <button onClick={() => setSignUp(false)}>Go Back</button>
      </div>
    </form>
  );
}
