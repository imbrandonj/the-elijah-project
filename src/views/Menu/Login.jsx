import { useState } from 'react';

/*
    Login.jsx
*/
export default function Login({ setLogIn, setSelectPlayer }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = event => {
    event.preventDefault();

    setSelectPlayer(true);
    setLogIn(false);
  };
  return (
    <form id="login" className="flex-col align-center" onSubmit={handleLogin}>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <div className="flex">
        <button onClick={() => setLogIn(false)}>Go Back</button>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}
