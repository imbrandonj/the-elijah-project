import { useState, useEffect } from 'react';

// internal components & modules:
import { useView } from '@root/contexts/ViewContext.jsx'; // global context
import { usePlayer } from '@root/contexts/PlayerContext.jsx'; // global context
import { fetchPlayers } from '@root/services/playersService.js';
import CreateNewPlayer from './CreateNewPlayer.jsx';

import astro from '@root/assets/svgs/astronaut.svg';

/*
    SelectPlayer.jsx
*/
export default function SelectPlayer({
  setSelectPlayer, // boolean, use state
  playerProfiles, // fetched player profiles, use state array
}) {
  const { setPlayerProfile } = usePlayer(); // context
  const { setView } = useView(); // context
  const [createPlayer, setCreatePlayer] = useState(false); // redirects to CreateNewPlayer.jsx when true

  console.log(playerProfiles);

  const handleSelectPlayer = player => {
    setPlayerProfile(player); // set the selected player in context
    setView('Dashboard');
    setSelectPlayer(false);
  };

  return (
    <div id="selectPlayer" className="flex-col align-center">
      {createPlayer || playerProfiles.length < 1 ? (
        <CreateNewPlayer
          setCreatePlayer={setCreatePlayer}
          setSelectPlayer={setSelectPlayer}
          playerProfiles={playerProfiles}
        />
      ) : (
        <>
          <h2>Select Player</h2>
          <hr />
          <div className="flex justify-center player-collection">
            {playerProfiles.map(player => (
              <button
                key={player.playerName}
                className="flex-col justify-center align-center playerSelectBtn small-caps"
                onClick={() => handleSelectPlayer(player)}
              >
                <img src={astro} height={60} alt="Create Player" />
                {player.playerName}
              </button>
            ))}
            {playerProfiles.length < 6 ? (
              <button
                className="flex-col justify-center align-center playerSelectBtn small-caps"
                onClick={() => setCreatePlayer(true)}
              >
                create a<br />
                new player
              </button>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
