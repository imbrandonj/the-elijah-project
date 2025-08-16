// playersService.js

import { db, auth } from '../firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  deleteField,
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
    dateCreated: new Date().toISOString(),
    progress: {
      Arith: {},
      'Alpha-Literacy': {},
      Perspective: {},
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
export const storeLevelProgress = async (
  playerId,
  planet,
  level,
  score,
  timestamp
) => {
  const playerRef = doc(db, 'players', playerId);

  try {
    await setDoc(
      playerRef,
      {
        progress: {
          [planet]: {
            [`level${level}`]: {
              score,
              timestamp,
            },
          },
        },
      },
      { merge: true }
    );
    console.log(
      `Level ${level} on ${planet} updated with score: ${score}, timestamp: ${timestamp}`
    );
  } catch (error) {
    console.error('Error updating level progress:', error);
  }
};

/**
 * Deletes player document in Firestore
 * @param {*} playerId
 */
export async function deletePlayerDocument(playerId) {
  const docRef = doc(db, 'players', playerId);
  await deleteDoc(docRef);
}

/**
 * Allows the user to rename their player name
 * @param {*} oldPlayerId
 * @param {*} newPlayerName
 * @param {*} userId
 * @returns
 */
export async function renamePlayer(oldPlayerId, newPlayerName, userId) {
  const oldDocRef = doc(db, 'players', oldPlayerId);
  const oldSnapshot = await getDoc(oldDocRef);

  if (!oldSnapshot.exists()) {
    throw new Error('Original player not found.');
  }

  const newPlayerId = `${userId}-${newPlayerName}`;
  const newDocRef = doc(db, 'players', newPlayerId);

  const newSnapshot = await getDoc(newDocRef);
  if (newSnapshot.exists()) {
    throw new Error('A player with this name already exists.');
  }

  const data = oldSnapshot.data();
  data.playerName = newPlayerName; // update name in data before copying

  await setDoc(newDocRef, data);
  await deleteDoc(oldDocRef);

  return newPlayerId;
}

/**
 * Deletes progress for a planet
 * @param {*} playerId
 * @param {*} planet
 */
export async function deletePlanetProgress(playerId, planet) {
  const docRef = doc(db, 'players', playerId);

  await updateDoc(docRef, {
    [`progress.${planet}`]: deleteField(),
  });
}
