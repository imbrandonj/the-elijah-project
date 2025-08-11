import { usePlayer } from '@root/contexts/PlayerContext.jsx'; // global context
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';
import NavButton from '../../../components/NavButton/NavButton';
import EraseButton from '../../../components/EraseButton/EraseButton';

import astronoob from '@root/assets/svgs/astronaut.svg';

import { useState } from 'react';

import './UserConfig.css';

export default function Stats({ setDashSelect }) {
  return (
    <div id="Config" className="flex-col justify-center align-center">
      <h2>Profile Configuration</h2>
      <hr />
      <ul className="flex-col align-center">
        <li>
          Player Name: <span className="small-caps">name</span>
          <EraseButton
            text={'Change Player Name'}
            onclick={() => setDashSelect('config')}
            color={'black'}
          />
        </li>
        <li>
          Avatar: <img src={astronoob} height={40}></img>{' '}
          <EraseButton
            text={'Change Avatar'}
            onclick={() => setDashSelect('config')}
            color={'black'}
          />
        </li>
        <li>
          User Email: <span className="small-caps">email@email.com</span>
          <EraseButton
            text={'Change Email'}
            onclick={() => setDashSelect('config')}
            color={'black'}
          />
        </li>
        <li>
          Password Reset:
          <EraseButton
            text={'Reset Password'}
            onclick={() => setDashSelect('config')}
            color={'black'}
          />
        </li>
        <li>
          Contact the Developer:{' '}
          <span className="small-caps">imbrandonj42@gmail.com</span>
        </li>
      </ul>
      <RedirectButton onclick={() => setDashSelect('entry')} text={'Go Back'} />
    </div>
  );
}
