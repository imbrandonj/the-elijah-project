// playersService.js

import { db, auth } from '../firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

// player profiles for the logged in user
export const fetchPlayers = async () => {
  const user = auth.currentUser;

  if (!user) throw new Error('User not authenticated.');

  // query Firestore for player profiles where the userId matches the logged in user
  const q = query(collection(db, 'players'), where('userId', '==', user.uid));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => doc.data());
};

/**
 * Create a new player in Firebase
 *
 * @param {string} playerName The name of the player being created
 * @returns {object} The new player data with initialized progress
 * @throws user not authenticated or invalid player data
 */
export const createPlayer = async playerName => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated.');
  }

  if (!playerName || !user.uid || !user.email) {
    throw new Error('Invalid player data.');
  }

  const playerRef = doc(db, 'players', `${user.uid}-${playerName}`);

  const newPlayerData = {
    playerName: playerName,
    userId: user.uid,
    email: user.email,
    progress: {
      Arith: {
        level1: 0,
      },
      'Alpha-Literacy': {
        level1: 0,
      },
      Perspective: {
        level1: 0,
      },
    },
  };

  await setDoc(playerRef, newPlayerData);

  return newPlayerData;
};

/**
 * Store level progress for a player
 *
 * @param {string} playerId
 * @param {string} planet
 * @param {string} level
 * @param {number} score
 */
export const storeLevelProgress = async (playerId, planet, level, score) => {
  const playerRef = doc(db, 'players', playerId);

  try {
    await setDoc(
      playerRef,
      {
        progress: {
          [planet]: {
            [`level${level}`]: score,
          },
        },
      },
      { merge: true }
    );
    console.log(`Level ${level} on ${planet} updated with score: ${score}`);
  } catch (error) {
    console.error('Error updating level progress:', error);
  }
};
