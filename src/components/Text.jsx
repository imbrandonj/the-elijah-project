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
          Click the <span className="italic">Begin!</span> button <br />
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
