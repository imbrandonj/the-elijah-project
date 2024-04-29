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
              'Alpha-Literacy set 2.// As you continue spelling, each level/ will have different types of words to spell.// This level will focus on people and body parts.'
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
    case 'AlphaEntry7':
      return (
        <div id="typing">
          <Typing
            words={
              'I have a new problem for you to solve.// There is a mix of cats and dogs./ I need a speller to separate them.// When you see a cat, type "cat"/ and when you see a dog, type "dog"'
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
    case 'AlphaEntry8':
      return (
        <div id="typing">
          <Typing
            words={
              'This level is a bit different.// You are going to identify and type special characters, such as commas, periods, and exclamation points.// This will test and develop your navigational skills of the keyboard.'
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
    case 'AlphaEntry9':
      return (
        <div id="typing">
          <Typing words={'9'} rate={50} />
          <p>
            When you're ready, click the{' '}
            <span className="italic small-caps">Begin!</span> button <br />
            to start.
          </p>
        </div>
      );
    case 'AlphaEntry10':
      return (
        <div id="typing">
          <Typing words={'10'} rate={50} />
          <p>
            When you're ready, click the{' '}
            <span className="italic small-caps">Begin!</span> button <br />
            to start.
          </p>
        </div>
      );
    case 'AlphaEntry11':
      return (
        <div id="typing">
          <Typing words={'11'} rate={50} />
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
              "Welcome to Arith! // This is a place to build your math skills. / Do you know what math is? / / Let's begin with the easiest math. / Count and add the objects 20 times."
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
              "Welcome to Arith Exercise Set 2. // You'll begin working on subtraction. // Subtraction is when you take away/ one number or amount from another number. // When you see a - sign, / then you know you are subtracting."
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
            words={
              "That was simple subtraction –/ you could use 1 hand 🖐️ and 5 fingers to count.// This level will have you doing subtraction/ that requires 2 hands 🖐️🖐️ and 10 fingers.// Or if you're good,/ you don't have to use your fingers to count."
            }
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
            words={
              'Remember typing numbers of an operation?// I told you what to type into the boxes/ and then you solved it.// Level 8 will have you typing / numbers of a subtraction operation.'
            }
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
            words={
              "It's time for you to subtract / two numbers from a larger one. // Notice that when you are subtracting/ with three numbers, there are 2 - signs. // These are called subtraction operators. /"
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry10':
      return (
        <div id="typing">
          <Typing
            words={
              'Arith Level 10:/ Challenge level for exercise set 2.// Demonstrate your subtraction abilities./ Achieve a minimum score of 600 to pass.'
            }
            rate={50}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry11':
      return (
        <div id="typing">
          <Typing words={'Begin Exercise Set 3!'} rate={50} />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry12':
      return (
        <div id="typing">
          <Typing words={'Harder addition'} rate={50} />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'ArithEntry13':
      return (
        <div id="typing">
          <Typing words={'Harder subtraction'} rate={50} />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'PerspEntry1':
      return (
        <div id="typing">
          <Typing
            words={
              "Hello and welcome to Perspective! // Here, you will practice / your left from right & your up from down. // You'll solve puzzles and mysteries of the universe. // Let's start with shapes – left and right. / I will guide you in telling you which shape to click."
            }
            rate={55}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    case 'PerspEntry2':
      return (
        <div id="typing">
          <Typing
            words={
              'I think you understand the game.// You did well with two shapes.// How will you do with four?'
            }
            rate={55}
          />
          <p>
            Click the <span className="italic small-caps">begin!</span> button
            to start.
          </p>
        </div>
      );
    default:
      return null;
  }
}
