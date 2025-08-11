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
              <br /> <span className="small-caps">name</span>
            </li>
            <li>
              User Email:
              <br /> <span className="small-caps">email@email.com</span>
            </li>
            <li>
              Levels Completed:
              <br />
              24
            </li>
            <li>
              Date Created:
              <br />
              08/10/2025
            </li>
            <EraseButton
              text={'Go to Configuration Page >>'}
              onclick={() => setDashSelect('config')}
              color={'black'}
            />
          </ul>
        ) : page === 1 ? (
          <ul className="flex planetStats">
            <div>
              <li>
                <figure className="flex-col align-center justify-center">
                  <img src={alphaLit} height={140}></img>
                  <figcaption>
                    <span>Alpha-Literacy</span>
                    <br /> Statistics
                  </figcaption>
                </figure>
              </li>
            </div>
            <section className="statsTable">
              <div className="flex">
                <li>Level</li>
                <li>High Score</li>
                <li>Completion Date</li>
              </div>
              <hr />
              <div className="flex">
                <li>1</li>
                <li>400</li>
                <li>08/10/2025</li>
              </div>
              <div className="flex">
                <li>2</li>
                <li>1000</li>
                <li>08/10/2025</li>
              </div>
            </section>
          </ul>
        ) : page === 2 ? (
          <ul className="flex planetStats">
            <div>
              <li>
                <figure className="flex-col align-center justify-center">
                  <img src={arith} height={140}></img>
                  <figcaption>
                    <span>Arith</span>
                    <br /> Statistics
                  </figcaption>
                </figure>
              </li>
            </div>
            <section className="statsTable">
              <div className="flex">
                <li>Level</li>
                <li>High Score</li>
                <li>Completion Date</li>
              </div>
              <hr />
              <div className="flex">
                <li>1</li>
                <li>400</li>
                <li>08/10/2025</li>
              </div>
              <div className="flex">
                <li>2</li>
                <li>1000</li>
                <li>08/10/2025</li>
              </div>
            </section>
          </ul>
        ) : page === 3 ? (
          <ul className="flex planetStats">
            <div>
              <li>
                <figure className="flex-col align-center justify-center">
                  <img src={persp} height={140}></img>
                  <figcaption>
                    <span>Perspective</span>
                    <br /> Statistics
                  </figcaption>
                </figure>
              </li>
            </div>
            <section className="statsTable">
              <div className="flex">
                <li>Level</li>
                <li>High Score</li>
                <li>Completion Date</li>
              </div>
              <hr />
              <div className="flex">
                <li>1</li>
                <li>400</li>
                <li>08/10/2025</li>
              </div>
              <div className="flex">
                <li>2</li>
                <li>1000</li>
                <li>08/10/2025</li>
              </div>
            </section>
          </ul>
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
