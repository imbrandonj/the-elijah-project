import { db, auth } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

// player profiles for the logged in user
export const fetchPlayers = async () => {
  const user = auth.currentUser;

  if (!user) throw new Error('User not authenticated.');

  // query Firestore for player profiles where the userId matches the logged in user
  const q = query(collection(db, 'players'), where('userId', '==', user.uid));

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => doc.data());
};
