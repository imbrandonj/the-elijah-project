import { usePlayer } from '@root/contexts/PlayerContext.jsx'; // global context
import { useView } from '@root/contexts/ViewContext.jsx'; // global state
import {
  deletePlayerDocument,
  renamePlayer,
  deletePlanetProgress,
} from '@root/services/playersService';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';
import EraseButton from '../../../components/EraseButton/EraseButton';

import astronoob from '@root/assets/svgs/astronaut.svg';

import { auth } from '@root/firebaseConfig';
import { sendPasswordResetEmail, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';

import './UserConfig.css';

export default function UserConfig({ setDashSelect }) {
  const { playerProfile, setPlayerProfile, initializeUser } = usePlayer();
  const { setView } = useView();
  const [playerName, setPlayerName] = useState('');
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState(playerProfile?.playerName || '');
  const redirectHome = () => setView('MainMenu');
  const [page, setPage] = useState(1);
  const [action, setAction] = useState();
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (playerProfile?.playerName) {
      setPlayerName(playerProfile.playerName);
    }
  }, [playerProfile]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      redirectHome();
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Allows user to edit their player name
   * @returns
   */
  const handleChangeName = async inputName => {
    const oldPlayerId = `${playerProfile.userId}-${playerProfile.playerName}`;

    try {
      await renamePlayer(oldPlayerId, inputName, playerProfile.userId);

      const updatedProfile = {
        ...playerProfile,
        playerName: inputName,
      };

      setPlayerProfile(updatedProfile);
      initializeUser(updatedProfile); // recreate SavedUser class instance

      alert('Name changed successfully!');
      setEditingName(false);
    } catch (err) {
      alert(err.message); // includes "name already exists" case
      console.error('Rename failed:', err.message);
    }
  };

  const handleResetPassword = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert('No user signed in.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, user.email);
      alert('Password reset email sent!');
    } catch (error) {
      console.error('Reset error:', error.message);
      alert('An error occurred while sending the reset email.');
    }
  };

  const handleDeletePlayer = async () => {
    try {
      const playerId = `${playerProfile.userId}-${playerProfile.playerName}`;
      await deletePlayerDocument(playerId);

      alert('Player deleted.');
      handleSignOut();
    } catch (err) {
      console.error('Failed to delete player:', err.message);
      alert('Something went wrong while deleting this player.');
    }
  };

  const handleDeletePlanet = async planetName => {
    try {
      const playerId = `${playerProfile.userId}-${playerProfile.playerName}`;
      await deletePlanetProgress(playerId, planetName);

      // Wipe from local context
      const updated = {
        ...playerProfile,
        progress: {
          ...playerProfile.progress,
          [planetName]: {},
        },
      };

      setPlayerProfile(updated);
      alert(`${planetName} progress deleted.`);
    } catch (err) {
      console.error(`Failed to delete ${planetName} progress:`, err.message);
      alert(`Error deleting ${planetName} progress.`);
    }
  };

  if (!playerProfile) {
    return (
      <div id="Config" className="flex-col justify-center align-center">
        <h2>Loading profile...</h2>
      </div>
    );
  }

  return (
    <div id="Config" className="flex-col justify-center align-center">
      <h2>Profile Configuration</h2>
      <hr />
      {page === 1 ? (
        <ul className="flex-col align-center">
          <li>
            Player Name:{' '}
            <span className="small-caps">{playerProfile.playerName}</span>
            <EraseButton
              text={'Change Player Name'}
              type="text"
              onclick={() => {
                setEditingName(true);
                setMsg('What would you like to change your name to?');
                setPage(2);
              }}
              color={'black'}
            />
          </li>
          <li>
            Avatar: <img src={astronoob} height={40}></img>{' '}
            <EraseButton
              text={'Change Avatar'}
              onclick={() => {
                setMsg('No Avatars available.');
                setPage(2);
              }}
              color={'black'}
            />
          </li>
          <li>
            Password Reset:
            <EraseButton
              text={'Reset Password'}
              onclick={() => {
                setMsg('Reset Password?');
                setAction(() => () => handleResetPassword());
                setPage(2);
              }}
              color={'black'}
            />
          </li>
          <li>
            Delete Player:
            <EraseButton
              text={'Delete Player'}
              onclick={() => {
                setMsg('Delete Player? You cannot undo this action.');
                setAction(() => () => handleDeletePlayer());
                setPage(2);
              }}
              color={'black'}
            />
          </li>
          <li className="flex-col">
            Reset Progress:
            <div>
              <EraseButton
                text={'Alpha-Literacy'}
                onclick={() => {
                  setMsg('Delete progress for Alpha-Literacy?');
                  setAction(() => () => handleDeletePlanet('Alpha-Literacy'));
                  setPage(2);
                }}
                color={'black'}
              />
              <EraseButton
                text={'Arith'}
                onclick={() => {
                  setMsg('Delete progress for Arith?');
                  setAction(() => () => handleDeletePlanet('Arith'));
                  setPage(2);
                }}
                color={'black'}
              />
              <EraseButton
                text={'Perspective'}
                onclick={() => {
                  setMsg('Delete progress for Perspective?');
                  setAction(() => () => handleDeletePlanet('Perspective'));
                  setPage(2);
                }}
                color={'black'}
              />
            </div>
          </li>
          <li>
            Contact the Developer:{' '}
            <span className="small-caps">imbrandonj42@gmail.com</span>
          </li>
        </ul>
      ) : page === 2 ? (
        <div className="flex-col align-center">
          <h2>{msg}</h2>
          {editingName ? (
            <input
              value={newName}
              onChange={e => setNewName(e.target.value)}
              className="name-input"
            />
          ) : null}
          <div>
            <EraseButton
              text={'Confirm'}
              onclick={async () => {
                if (editingName) {
                  await handleChangeName(newName);
                } else {
                  await action?.();
                }
                setAction(null);
                setEditingName(false);
                setPage(1);
              }}
              color={'black'}
            />
            <EraseButton
              text={'Cancel'}
              onclick={() => {
                setPage(1);
                setAction(null);
                setEditingName(false);
              }}
              color={'black'}
            />
          </div>
        </div>
      ) : null}
      <RedirectButton onclick={() => setDashSelect('entry')} text={'Go Back'} />
    </div>
  );
}
