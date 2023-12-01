import Typing from './Typing.jsx';

/*
  Text.jsx component

  This component displays a formatted text which matches its prop `text`
  Most commonly used in LevelEntry.jsx

  It then calls `Typing.jsx` to display the text with a typing effect
*/
export default function Text({ text }) {
  switch (text) {
    case 'AlphaEntry1':
      return (
        <div id="typing">
          <Typing
            words={
              "Welcome to planet Alpha-Literacy./ / Here, you will navigate the English alphabet. / Do you know your way around the keyboard yet? / Don't worry, you'll get plenty of practice./ / Prepare your fingers! /"
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">Begin!</span> button.{' '}
            <br />
          </p>
        </div>
      );
    case 'AlphaEntry2':
      return (
        <div id="typing">
          <Typing
            words={
              "Let's continue navigating the alphabet. / / This time, you'll see 20 lowercase letters. / / Again, what you'll type is case-insensitive. / This means it doesn't matter if you / type lowercase or uppercase. / Just match the letter and press enter. / / Ready? /"
            }
            rate={48}
          />
          <p>
            Click the <span className="italic small-caps">Begin!</span> button{' '}
            <br />
          </p>
        </div>
      );

    case 'AlphaEntry3':
      return (
        <div id="typing">
          <Typing
            words={
              "In the previous levels, / you've been able to type and enter / either uppercase or lowercase letters. / / This time, your answers are case-sensitive. / / If you see an uppercase letter, / you must type your answer in uppercase. / If you see a lowercase letter, / you must type your answer in lowercase. /"
            }
            rate={49}
          />
          <p>
            When you're ready, click the{' '}
            <span className="italic small-caps">Begin!</span> button to enter 20
            case-sensitive letters.
          </p>
        </div>
      );
    case 'AlphaEntry4':
      return (
        <p>
          It's time to move on. <br />
          We will now begin spelling. <br />
          <br />
          Let's begin spelling easy words.
          <br />
          We'll start with animals. <br />
          <br />
          Spell 20 different animals. <br />
          As usual, press the <span className="italic small-caps">
            Begin!
          </span>{' '}
          button to start.
        </p>
      );
    case 'AlphaEntry5':
      return (
        <p>
          Welcome to level 5,
          <br />
          your first challenge level for planet Alpha-Literacy.
          <br />
          <br />
          For this challenge, you will have to type 20 letters
          <br />
          and obtain a minimum score of <span className="minScore">600</span>.
          <br />
          <br />
          When you're ready, click the{' '}
          <span className="italic small-caps">Begin!</span> button <br />
          to begin the challenge.
        </p>
      );
    case 'ArithEntry1':
      return (
        <p>
          Welcome to Arith! <br />
          <br />
          This is a place to build your math skills. <br />
          Do you know what math is? <br />
          <br />
          Let's begin with the easiest math. <br /> <br />
          Count and add 20 objects. <br />
          Click the <span className="italic small-caps">begin!</span> button to
          start.
        </p>
      );
    case 'ArithEntry2':
      return (
        <p>
          Good job counting.
          <br />
          Did you know that counting is math? <br />
          <br />
          When we count objects, we are practicing addition. <br />
          <br />
          This time, let's use numbers. <br />
          Add the numbers together to get your answer. <br />
          <br />
          Click the <span className="italic small-caps">begin!</span> button to
          start.
        </p>
      );
    case 'ArithEntry3':
      return (
        <p>
          Let's work on typing numbers of an operation.
          <br />
          An operation takes input values and gives an output.
          <br />
          <br />
          For level 3:
          <br /> <span className="indent"> </span>
          You will be given an audio of a math operation.
          <br /> <span className="indent"> </span>
          Your job will be to type the numbers into their boxes,
          <br /> <span className="indent"> </span>
          And then come up with the sum of the two numbers.
          <br />
          <br />
          Click the <span className="italic small-caps">begin!</span> button to
          start.
        </p>
      );
    case 'ArithEntry4':
      return (
        <p>
          Here are are!
          <br />
          Arith Level 4
          <br />
          <br />
        </p>
      );
    case 'ArithEntry5':
      return (
        <p>
          Arith Level 5 is a challenge level.
          <br />
          <br />
          To complete this challenge,
          <br />
          you must achieve a minimum score of{' '}
          <span className="minScore">600</span>.
          <br />
          <br />
          Your objective is to complete
          <br />
          20 basic addition problems.
          <br />
          <br />
          Click the <span className="italic small-caps">begin!</span> button to
          start.
        </p>
      );
    case 'ArithEntry6':
      return (
        <p>
          Let's begin subtraction.
          <br />
          <br />
          Click the <span className="italic small-caps">begin!</span> button to
          start.
        </p>
      );
    case 'PerspEntry1':
      return (
        <p>
          Test
          <br />
          Testing Persp Testttt
          <br />
          <br />
          Click the <span className="italic small-caps">begin!</span> button to
          start.
        </p>
      );
    default:
      return null;
  }
}
