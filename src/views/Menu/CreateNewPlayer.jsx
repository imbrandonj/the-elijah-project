import { useState } from 'react';

// local imports:
import { useView } from '@root/contexts/ViewContext.jsx';
import { usePlayer } from '../../contexts/PlayerContext';
import { createPlayer } from '@root/services/playersService.js';

import astro from '@root/assets/svgs/astronaut.svg';

export default function CreateNewPlayer({
  setCreatePlayer, // set use state (boolean)
  setSelectPlayer, // set use state (boolean)
  playerProfiles, // array of the user's player profiles
}) {
  const { setView } = useView();
  const { setPlayerProfile } = usePlayer();
  const [playerName, setPlayerName] = useState('');
  const [msg, setMsg] = useState(null); // form message

  const handleNewPlayer = async event => {
    event.preventDefault();

    if (playerName.length < 1) {
      setMsg('Please enter a player name.');
      return;
    }

    if (playerProfiles.some(player => player.playerName === playerName)) {
      setMsg('Player name already exists.');
      return;
    }

    try {
      const newPlayer = await createPlayer(playerName);

      setPlayerProfile(newPlayer);
      setMsg(`Welcome, ${playerName}!`);

      // on success, redirect to Dashboard, reset Main Menu state
      setTimeout(() => {
        setView('Dashboard');
        setCreatePlayer(false);
        setSelectPlayer(false);
      }, 1420);
    } catch (err) {
      setMsg('Failed to create player. Please try again.');
    }
  };

  return (
    <form
      id="newPlayer"
      className="flex-col align-center"
      onSubmit={handleNewPlayer}
    >
      <h2>Create a New Player</h2>
      <hr />
      <img src={astro} height={140} />
      <label htmlFor="playerName">Player Name:</label>
      <input
        id="playerName"
        type="text"
        value={playerName}
        onChange={({ target }) => setPlayerName(target.value)}
      />
      {
        <span className="form-message flex align-end justify-center">
          {msg ? msg : null}
        </span>
      }
      <div className="flex">
        {playerProfiles.length > 0 ? (
          <button
            onClick={event => {
              event.preventDefault();
              setCreatePlayer(false);
              setSelectPlayer(true);
            }}
          >
            Go Back
          </button>
        ) : null}
        <button type="submit" className="playerSelectBtn">
          Confirm
        </button>
      </div>
    </form>
  );
}
