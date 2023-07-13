// imported components:
import RocketButton from '@root/components/RocketButton/RocketButton';

import './About.css'; // component styles

export default function About({ setView }) {
  return (
    <div id="aboutMenu">
      <div id="aboutWrapper">
        <h2>
          Hello 👋 <br />
          my name is Brandon, <br />
          developer of <br /> The Elijah Project.
        </h2>
        <p id="aboutParagraph">
          I developed this educational web app for my 4 year old son, Elijah.
          <br />
          <br />
          My son wasn't in daycare or any early Pre-K programs. <br />
          As a full time student & father, I often spent my days with him.
          <br />I knew I had to do something to encourage his development.
          <br />
          <br />
          Being a computer science student - I had an idea to create an
          educational app.
          <br />
          Something pure, something simple, something creative and free.
          <br />
          <br />
          Using this app, Elijah now knows his way around a mouse & keyboard.
          <br />
          He can spell simple words, and he can perform basic operations of
          math.
          <br />
          As he grows in development, so does this application.
          <br />
          <br />
          Join us in growth and development,
          <br />
          It's as simple as pressing 'Start', choosing a subject path, and
          pressing 'Begin Here'
          <br />
          Good luck, have fun, work together, and be patient.
          <br />
        </p>
        <p id="signature"> -Brandon </p>
      </div>
      <RocketButton
        text="Back"
        position="below"
        movement="horizontal"
        setView={setView}
        view={'MainMenu'}
      />
    </div>
  );
}
