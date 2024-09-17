// utilizes context for current player
import { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerProfile, setPlayerProfile] = useState(null);
  const [progress, setProgress] = useState({
    Arith: {},
    'Alpha-Literacy': {},
    Perspective: {},
  });

  return (
    <PlayerContext.Provider
      value={{ playerProfile, setPlayerProfile, progress, setProgress }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  return useContext(PlayerContext);
};
