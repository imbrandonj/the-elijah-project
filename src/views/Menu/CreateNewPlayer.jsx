// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';

import { useState } from 'react';

import astro from '@root/assets/svgs/astronaut.svg';

export default function CreateNewPlayer({
  setNewPlayer,
  setSelectPlayer,
  newAccount,
}) {
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
      <img src={astro} height={140} />
      <label htmlFor="playerName">Player Name:</label>
      <input
        id="playerName"
        type="text"
        value={playerName}
        onChange={({ target }) => setPlayerName(target.value)}
      />
      <div className="flex">
        {!newAccount ? (
          <button onClick={() => setNewPlayer(false)}>Go Back</button>
        ) : null}
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}
