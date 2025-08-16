// utilizes context for current player
import { createContext, useContext, useState } from 'react';
import { SavedUser } from '../classes/SavedUser';
import { OpenPlayUser } from '../classes/OpenPlayUser';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerProfile, setPlayerProfile] = useState(null);
  const [userInstance, setUserInstance] = useState(null);

  /**
   * Set user instance based on whether player is in Open Play or logged in
   * @param {string|object} profile - either openPlay or player object
   */
  const initializeUser = profile => {
    if (profile === 'openPlay') {
      setUserInstance(new OpenPlayUser()); // open play selected; OpenPlayUser class created
    } else {
      const { playerName, playerId } = profile;
      setUserInstance(
        new SavedUser(playerName, `${profile.userId}-${profile.playerName}`)
      );
    }
    setPlayerProfile(profile);
  };

  /**
   * Helper to update playerProfile context
   * @param {} planet
   * @param {*} level
   * @param {*} score
   */
  const updateContext = (planet, level, score) => {
    setPlayerProfile(prevProfile => ({
      ...prevProfile,
      progress: {
        ...prevProfile.progress,
        [planet]: {
          ...prevProfile.progress[planet],
          [`level${level}`]: {
            score,
            timestamp,
          },
        },
      },
    }));
  };

  /**
   * Main method for saving
   * Saves score for the current player in firebase & in context
   * delegates to the userInstance's saveProgress method
   */
  const saveScore = async ({ planet, level, score, timestamp }) => {
    if (!userInstance) return console.warn('No user instance set');

    await userInstance.saveProgress({ planet, level, score, timestamp });

    updateContext(planet, level, score, timestamp);
  };

  return (
    <PlayerContext.Provider
      value={{
        playerProfile,
        setPlayerProfile,
        initializeUser,
        userInstance,
        saveScore,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  return useContext(PlayerContext);
};
