/*
  Text.jsx component

  This component displays a formatted text which matches its prop `text`
  Most commonly used in LevelEntry.jsx
*/
export default function Text({ text }) {
  console.log('test from in text');
  console.log(text);
  switch (text) {
    case 'AlphaEntry1':
      return (
        <p>
          Welcome to planet Alpha-Literacy. <br />
          <br />
          Here, you will navigate the English alphabet. <br />
          Do you know your way around the keyboard yet? <br />
          Don't worry, you'll get plenty of practice. <br /> <br />
          Prepare your fingers! <br />
          Click the <span className="italic small-caps">
            Begin!
          </span> button. <br />
        </p>
      );
    case 'AlphaEntry2':
      return (
        <p>
          Let's continue navigating the keyboard. <br />
          <br />
          This time, you'll see 20 lowercase letters.
          <br />
          <br />
          Again, what you'll type is case-insensitive. <br />
          This means it doesn't matter if you <br /> type lowercase or
          uppercase.
          <br />
          Just match the correct letter and press enter. <br />
          <br />
          Are you ready? <br />
          Click the <span className="italic small-caps">
            Begin!
          </span> button <br />
        </p>
      );

    case 'AlphaEntry3':
      return (
        <p>
          In the previous levels, <br />
          You've been able to type and enter <br /> either uppercase or
          lowercase letters. <br /> <br />
          This time, your answers are case-sensitive. <br />
          <br />
          What this means: <br />
          If you see an uppercase letter, <br />
          You must type your answer in uppercase. <br />
          If you see a lowercase letter, <br />
          You must type your answer in lowercase. <br />
          <br />
          When you're ready, Click the{' '}
          <span className="italic small-caps">Begin!</span> button <br />
          To enter 20 case-sensitive letters.
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
    default:
      return null;
  }
}
