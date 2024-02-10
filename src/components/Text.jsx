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
        <div id="typing">
          <Typing
            words={
              "It's time to move on. / We will now begin spelling. / / Let's begin spelling easy words. / We'll start with animals. / / Spell 20 different animals. / "
            }
            rate={50}
          />
          <p>
            As usual, press the{' '}
            <span className="italic small-caps">Begin!</span> button to start.
          </p>
        </div>
      );
    case 'AlphaEntry5':
      return (
        <div id="typing">
          <Typing
            words={
              "You've arrived at level 5.// This is your first challenge level/ for planet Alpha-Literacy. / / For this challenge,/ you will have to type 20 letters / and obtain a minimum score of 600. // Try not to make a mistake / or you'll lose points. /"
            }
            rate={50}
          />
          <p>
            When you're ready, click the{' '}
            <span className="italic small-caps">Begin!</span> button <br />
            to begin the challenge.
          </p>
        </div>
      );
    case 'AlphaEntry6':
      return (
        <div id="typing">
          <Typing
            words={
              "Let's continue spelling words.// As we continue spelling, each level will have different words to spell.// This level will focus on people and body parts.// "
            }
            rate={50}
          />
          <p>
            When you're ready, click the{' '}
            <span className="italic small-caps">Begin!</span> button <br />
            to start.
          </p>
        </div>
      );
    case 'ArithEntry1':
      return (
        <div id="typing">
          <Typing
            words={
              "Welcome to Arith! // This is a place to build your math skills. / Do you know what math is? / / Let's begin with the easiest math. / Count and add 20 objects."
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry2':
      return (
        <div id="typing">
          <Typing
            words={
              "Good job counting. / Did you know that counting is math? / / When we count objects, we are practicing addition. / / This time, let's use numbers. / Add the numbers together to get your answer. /"
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry3':
      return (
        <div id="typing">
          <Typing
            words={
              "Let's work on typing numbers of an operation. // I will tell you what numbers to type. // Your job is to place the numbers into / the correct boxes and then solve the problem! /"
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry4':
      return (
        <div id="typing">
          <Typing
            words={
              "It's time for you to add / three numbers together at a time. // Notice that when you are adding three numbers, there are 2 + signs. // These are called addition operators. /"
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry5':
      return (
        <div id="typing">
          <Typing
            words={
              'Arith Level 5 is a challenge level. // To complete this challenge, you must achieve a minimum score of 600. // Your objective is to complete 20 / basic addition problems.'
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            <br />
            to start the challenge.
          </p>
        </div>
      );
    case 'ArithEntry6':
      return (
        <div id="typing">
          <Typing
            words={
              "Welcome to Arith Exercise Set 2. // Let's begin working on subtraction. // Subtraction is when you take away one number or amount from another number. // When you see a - sign, / then you know you are subtracting."
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry7':
      return (
        <div id="typing">
          <Typing
            words={'Subtraction from 6 to 10 minus 0 through 5'}
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry8':
      return (
        <div id="typing">
          <Typing
            words={'Typing and answering a subtraction operation.'}
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry9':
      return (
        <div id="typing">
          <Typing
            words={'Three numbers in a subtraction operation.'}
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
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
