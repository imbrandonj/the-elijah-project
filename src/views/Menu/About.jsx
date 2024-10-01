// imported components:
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';
import NavButton from '../../components/NavButton/NavButton';

// imported svgs:
import Arith from '@root/assets/svgs/arith.svg';
import Perspective from '@root/assets/svgs/perspective.svg';
import AlphaLiteracy from '@root/assets/svgs/alpha-literacy.svg';
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
          <p className="flex align-center justify-center">
            Hello 👋 my name is Brandon, <br />
            developer of The Elijah Project.
            <br />
            <br />
            I created this website for my son Elijah.
            <br />
            And now for my baby daughter Emilia, too.
          </p>
        ) : page === 1 ? (
          <p className="flex align-center justify-center">
            This is an educational
            <br /> exercise-based web application.
            <br /> <br />
            You can practice your skills by
            <br /> tackling challenges and conquering levels.
          </p>
        ) : page === 2 ? (
          <p className="flex-col align-center justify-center">
            The player can explore different planets.
            <div>
              <img className="smallImg" src={AlphaLiteracy} height={100} />
              <img className="smallImg" src={Arith} height={100} />
              <img className="smallImg" src={Perspective} height={100} />
            </div>
            Each planet has a unique set of exercises.
          </p>
        ) : page === 3 ? (
          <p className="flex-col align-center justify-start">
            <figure>
              <img src={AlphaLiteracy} height={120} />
              <figcaption>Planet Alpha-Literacy</figcaption>
            </figure>
            Allows the player to navigate the keyboard,
            <br /> practicing their letters and spelling.
          </p>
        ) : page === 4 ? (
          <p className="flex-col align-center justify-start">
            <figure>
              <img src={Arith} height={120} />
              <figcaption>Planet Arith</figcaption>
            </figure>
            Introduces the player to basic arithmetic
            <br /> and math operations.
          </p>
        ) : page === 5 ? (
          <p className="flex-col align-center justify-start">
            <figure>
              <img src={Perspective} height={120} />
              <figcaption>Planet Perspective</figcaption>
            </figure>
            Tests the player on various instruction following and pattern
            recognition.
          </p>
        ) : page === 6 ? (
          <p className="flex-col align-center justify-center">
            <figure>
              <img src={Constellation} height={120} />
              <figcaption>?</figcaption>
            </figure>
            ... and much, much more.
          </p>
        ) : page === 7 ? (
          <p className="flex align-center justify-center">
            The user can create a unique profile,
            <br />
            storing their player progress.
            <br />
            <br />
            You can collect badges, items,
            <br />
            and unlock various content.
          </p>
        ) : page === 8 ? (
          <p className="flex align-center justify-center">
            Create an account by
            <br /> signing up with your email. <br />
            <br />
            You can store up to 6 players per account.
          </p>
        ) : page === 9 ? (
          <p className="flex align-center justify-center">
            I update this website often.
            <br />
            New features will be frequently added.
            <br />
            <br />
            Feel free to contact me at:
            <br />
            imbrandonj42@gmail.com
          </p>
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
