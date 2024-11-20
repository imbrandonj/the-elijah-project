// utilizes context for current player
import { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerProfile, setPlayerProfile] = useState(null);

  // function to update a single level score:
  const setPlayerProfileScore = (planet, level, score) => {
    setPlayerProfile(prevProfile => ({
      ...prevProfile,
      progress: {
        ...prevProfile.progress,
        [planet]: {
          ...prevProfile.progress[planet],
          [`level${level}`]: score,
        },
      },
    }));
  };

  return (
    <PlayerContext.Provider
      value={{ playerProfile, setPlayerProfile, setPlayerProfileScore }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  return useContext(PlayerContext);
};
