import { db, auth } from '../firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
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

// create a new player
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
