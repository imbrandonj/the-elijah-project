// imported components:
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';
import NavButton from '../../components/NavButton/NavButton';

// imported svgs:
import Arith from '@root/assets/img/arith.webp';
import Perspective from '@root/assets/img/perspective.webp';
import AlphaLiteracy from '@root/assets/img/alpha-lit.webp';
import Constellation from '@root/assets/svgs/constellation.svg';

import { useState } from 'react';

export default function About({ setAbout }) {
  const [page, setPage] = useState(0);

  return (
    <div id="aboutMenu" className="flex-col align-center justify-center">
      <h2 className="center-text">About</h2>
      <hr />
      <div className="flex align-center center-text">
        {page === 0 ? (
          <div className="empty-space"></div>
        ) : (
          <NavButton onclick={() => setPage(page - 1)} direction={'<'} />
        )}
        {page === 0 ? (
          <section className="flex align-center justify-center">
            <p>
              Hello 👋 my name is Brandon, <br />
              developer of The Elijah Project.
              <br />
              <br />
              I created this website for my son Elijah.
              <br />
              And now for my baby daughter Emilia, too.
            </p>
          </section>
        ) : page === 1 ? (
          <section className="flex align-center justify-center">
            <p>
              This is an educational
              <br /> exercise-based web application.
              <br /> <br />
              You can practice your skills by
              <br /> tackling challenges and conquering levels.
            </p>
          </section>
        ) : page === 2 ? (
          <section className="flex-col align-center justify-center">
            <p> The player can explore different planets.</p>
            <div>
              <img className="smallImg" src={AlphaLiteracy} height={130} />
              <img className="smallImg" src={Arith} height={130} />
              <img className="smallImg" src={Perspective} height={130} />
            </div>
            <p>Each planet has a unique set of exercises.</p>
          </section>
        ) : page === 3 ? (
          <section className="flex-col align-center justify-start">
            <figure>
              <img src={AlphaLiteracy} height={140} />
              <figcaption>Planet Alpha-Literacy</figcaption>
            </figure>
            <p>
              Allows the player to navigate the keyboard,
              <br /> practicing their letters and spelling.
            </p>
          </section>
        ) : page === 4 ? (
          <section className="flex-col align-center justify-start">
            <figure>
              <img src={Arith} height={140} />
              <figcaption>Planet Arith</figcaption>
            </figure>
            <p>
              Introduces the player to
              <br /> basic arithmetic and math operations.
            </p>
          </section>
        ) : page === 5 ? (
          <section className="flex-col align-center justify-start">
            <figure>
              <img src={Perspective} height={140} />
              <figcaption>Planet Perspective</figcaption>
            </figure>
            <p>
              Tests the player on various instruction
              <br /> following and pattern recognition.
            </p>
          </section>
        ) : page === 6 ? (
          <section className="flex-col align-center justify-center">
            <figure>
              <img src={Constellation} height={120} />
              <figcaption>?</figcaption>
            </figure>
            <p>... and much, much more.</p>
          </section>
        ) : page === 7 ? (
          <section className="flex align-center justify-center">
            <p>
              The user can create a unique profile,
              <br />
              storing their player progress.
              <br />
              <br />
              You can collect badges, items,
              <br />
              and unlock various content.
            </p>
          </section>
        ) : page === 8 ? (
          <section className="flex align-center justify-center">
            <p>
              Create an account by
              <br /> signing up with your email. <br />
              <br />
              You can store up to 6 players per account.
            </p>
          </section>
        ) : page === 9 ? (
          <section className="flex-col align-center justify-center">
            <p>
              I update this website often.
              <br />
              New features will be frequently added.
              <br />
              <br />
              Feel free to contact me:
              <br />
              <span>imbrandonj42@gmail.com</span>
            </p>
          </section>
        ) : null}
        {page === 9 ? (
          <div className="empty-space"></div>
        ) : (
          <NavButton onclick={() => setPage(page + 1)} direction={'>'} />
        )}
      </div>
      <RedirectButton onclick={() => setAbout(false)} text={'Return Home'} />
    </div>
  );
}
