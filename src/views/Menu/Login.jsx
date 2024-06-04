import { useState } from 'react';

/*
    Login.jsx
*/
export default function Login({ setLogIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();
  };
  return (
    <form id="login" className="flex-col align-center" onSubmit={handleLogin}>
      <label for="email">Email:</label>
      <input
        name="email"
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
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
