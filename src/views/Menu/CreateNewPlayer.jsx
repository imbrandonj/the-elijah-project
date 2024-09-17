import { useState } from 'react';
import { db, auth } from '@root/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

// local imports:
import { useView } from '@root/contexts/ViewContext.jsx';

import astro from '@root/assets/svgs/astronaut.svg';

export default function CreateNewPlayer({
  setCreatePlayer, // set use state (boolean)
  setSelectPlayer, // set use state (boolean)
  emptyPlayers, // boolean use state
  setEmptyPlayers, // set use state (boolean)
}) {
  const { setView } = useView();
  const [playerName, setPlayerName] = useState('');
  const [msg, setMsg] = useState(null); // form message

  const handleNewPlayer = async event => {
    event.preventDefault();

    if (playerName.length < 1) {
      setMsg('Please enter a player name.');
      return;
    }

    try {
      const user = auth.currentUser;

      const playerRef = doc(db, 'players', `${user.uid}-${playerName}`);

      // initial player data
      await setDoc(playerRef, {
        playerName: playerName,
        userId: user.uid,
        email: user.email,
        progress: {
          Arith: 0,
          'Alpha-Literacy': 0,
          Perspective: 0,
        },
      });

      // redirect to Dashboard, reset Main Menu state
      setView('Dashboard');
      setCreatePlayer(false);
      setSelectPlayer(false);
      setEmptyPlayers(false);
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
        {!emptyPlayers ? (
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
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}
