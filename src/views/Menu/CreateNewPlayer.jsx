// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';

import { useState } from 'react';

export default function CreateNewPlayer({ setNewPlayer, setSelectPlayer }) {
  const { setView } = useView();
  const [playerName, setPlayerName] = useState('');

  const handleNewPlayer = event => {
    event.preventDefault();

    setView('Dashboard');
    setSelectPlayer(false);
  };
  return (
    <form
      id="newPlayer"
      className="flex-col align-center"
      onSubmit={handleNewPlayer}
    >
      <label htmlFor="playerName">Player Name:</label>
      <input
        id="playerName"
        type="text"
        value={playerName}
        onChange={({ target }) => setPlayerName(target.value)}
      />
      <div className="flex">
        <button onClick={() => setNewPlayer(false)}>Go Back</button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}