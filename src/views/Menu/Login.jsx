import { useState } from 'react';

/*
    Login.jsx
*/
export default function Login({ setLogIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();
  };
  return (
    <form className="flex-col align-center" onSubmit={handleLogin}>
      <label for="username">Username:</label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label for="password">Password:</label>
      <input
        name="password"
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <div className="flex">
        <button type="submit">Log In</button>
        <button onClick={() => setLogIn(false)}>Go Back</button>
      </div>
    </form>
  );
}
