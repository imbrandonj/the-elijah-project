import { usePlayer } from '@root/contexts/PlayerContext.jsx'; // global context
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';
import NavButton from '../../../components/NavButton/NavButton';
import EraseButton from '../../../components/EraseButton/EraseButton';

import astronoob from '@root/assets/svgs/astronaut.svg';
import arith from '@root/assets/img/arith.webp';
import alphaLit from '@root/assets/img/alpha-lit.webp';
import persp from '@root/assets/img/perspective.webp';

import { useState } from 'react';

import './Stats.css';

export default function Stats({ setDashSelect }) {
  const { playerProfile } = usePlayer(); // context
  console.log(playerProfile);
  const [page, setPage] = useState(0);
  const [searchLevel, setSearchLevel] = useState('');

  const levelsCompleted = Object.values(playerProfile?.progress || {}).reduce(
    (acc, planetProgress) => acc + Object.keys(planetProgress).length,
    0
  );

  const renderPlanetStats = planetName => {
    const levels = playerProfile?.progress?.[planetName];

    if (!levels || Object.keys(levels).length === 0) {
      return (
        <div>
          <li className="center-text">No progress recorded.</li>
        </div>
      );
    }

    // entries by level number ascending
    const entries = Object.entries(levels)
      .sort(([aKey], [bKey]) => {
        const aLevel = parseInt(aKey.replace('level', ''));
        const bLevel = parseInt(bKey.replace('level', ''));
        return aLevel - bLevel;
      })
      .filter(([levelKey]) => {
        if (!searchLevel.trim()) return true;
        return levelKey === `level${parseInt(searchLevel)}`;
      });

    if (entries.length === 0) {
      return <li className="center-text">No matching level found</li>;
    }

    return entries.map(([levelKey, value]) => {
      const score =
        typeof value === 'object' && value !== null ? value.score : value;

      const date =
        typeof value === 'object' && value.timestamp
          ? new Date(value.timestamp).toLocaleDateString()
          : 'N/A';

      return (
        <div className="flex" key={levelKey}>
          <li>{levelKey.replace('level', '')}</li>
          <li>{score}</li>
          <li>{date}</li>
        </div>
      );
    });
  };

  return (
    <div id="Stats" className="flex-col justify-center align-center">
      <h2>Player Statistics</h2>
      <hr />
      <div className="flex">
        <NavButton
          onclick={() => {
            if (page != 0) {
              setPage(page - 1);
            } else {
              setPage(3);
            }
          }}
          direction={'<'}
        />
        {page === 0 ? (
          <ul className="flex profile">
            <li className="flex-col align-center justify-center avatar">
              <img src={astronoob} height={180}></img>
              <hr />
            </li>

            <li>
              Player Name:
              <br />{' '}
              <span className="small-caps">
                {playerProfile?.playerName || 'N/A'}
              </span>
            </li>
            <li>
              User Email:
              <br />{' '}
              <span className="small-caps">
                {playerProfile?.email || 'N/A'}
              </span>
            </li>
            <li>
              Levels Completed:
              <br />
              {levelsCompleted}
            </li>
            <li>
              Date Created:
              <br />
              {playerProfile?.dateCreated
                ? new Date(playerProfile.dateCreated).toLocaleDateString()
                : 'N/A'}
            </li>
            <EraseButton
              text={'Go to Configuration Page >>'}
              onclick={() => setDashSelect('config')}
              color={'black'}
            />
          </ul>
        ) : page === 1 ? (
          <section className="planetStats">
            <div className="flex-col justify-center align-center">
              <figure className="flex-col align-center justify-center">
                <img src={alphaLit} height={140}></img>
                <figcaption>
                  <span>Alpha-Literacy</span>
                  <br /> Statistics
                </figcaption>
              </figure>
              <input
                type="number"
                placeholder="Search level..."
                className="levelSearch"
                value={searchLevel}
                onChange={e => setSearchLevel(e.target.value)}
              />
            </div>
            <ul className="statsTable">
              <div className="flex">
                <li>Level</li>
                <li>High Score</li>
                <li>Completion Date</li>
              </div>
              <hr />
              {renderPlanetStats('Alpha-Literacy')}
            </ul>
          </section>
        ) : page === 2 ? (
          <section className="planetStats">
            <div className="flex-col justify-center align-center">
              <figure className="flex-col align-center justify-center">
                <img src={arith} height={140}></img>
                <figcaption>
                  <span>Arith</span>
                  <br /> Statistics
                </figcaption>
              </figure>
              <input
                type="number"
                placeholder="Search level..."
                className="levelSearch"
                value={searchLevel}
                onChange={e => setSearchLevel(e.target.value)}
              />
            </div>
            <ul className="statsTable">
              <div className="flex">
                <li>Level</li>
                <li>High Score</li>
                <li>Completion Date</li>
              </div>
              <hr />
              {renderPlanetStats('Arith')}
            </ul>
          </section>
        ) : page === 3 ? (
          <section className="planetStats">
            <div className="flex-col justify-center align-center">
              <figure className="flex-col align-center justify-center">
                <img src={persp} height={140}></img>
                <figcaption>
                  <span>Perspective</span>
                  <br /> Statistics
                </figcaption>
              </figure>
              <input
                type="number"
                placeholder="Search level..."
                className="levelSearch"
                value={searchLevel}
                onChange={e => setSearchLevel(e.target.value)}
              />
            </div>
            <ul className="statsTable">
              <div className="flex">
                <li>Level</li>
                <li>High Score</li>
                <li>Completion Date</li>
              </div>
              <hr />
              {renderPlanetStats('Perspective')}
            </ul>
          </section>
        ) : null}
        <NavButton
          onclick={() => {
            if (page != 3) {
              setPage(page + 1);
            } else {
              setPage(0);
            }
          }}
          direction={'>'}
        />
      </div>
      <RedirectButton onclick={() => setDashSelect('entry')} text={'Go Back'} />
    </div>
  );
}
