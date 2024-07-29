// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import CreateNewPlayer from './CreateNewPlayer.jsx';

import { useState } from 'react';

import astro from '@root/assets/svgs/astronaut.svg';

/*
    SelectPlayer.jsx
*/
export default function SelectPlayer({ setSelectPlayer }) {
  const { setView } = useView();
  const [newPlayer, setNewPlayer] = useState(false);
  const [playerName, setPlayerName] = useState('');

  return (
    <div className="flex-col align-center">
      {newPlayer ? <h2>Create a new Player:</h2> : <h2>Select Player:</h2>}
      <hr />
      {newPlayer ? (
        <CreateNewPlayer
          setNewPlayer={setNewPlayer}
          setSelectPlayer={setSelectPlayer}
        />
      ) : (
        <div className="flex justify-center">
          <button
            className="flex-col justify-center align-center playerSelectBtn small-caps"
            onClick={() => {
              setView('Dashboard');
              setSelectPlayer(false);
            }}
          >
            elijah
            <img src={astro} height={60} />
          </button>
          <button
            className="flex-col justify-center align-center playerSelectBtn small-caps"
            onClick={() => setNewPlayer(true)}
          >
            create a<br />
            new player
            <img src={astro} height={60} />
          </button>
        </div>
      )}
    </div>
  );
}
