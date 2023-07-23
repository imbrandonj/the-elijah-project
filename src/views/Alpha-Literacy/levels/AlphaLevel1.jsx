export default function AlphaLevel1() {
  return (
    <div>
      <p id="litQ">
        <span>Enter the letter:</span>
        <br />
        <span id="letterQ">{problem.question}</span>
      </p>
      <input
        id="litAns"
        type="text"
        onKeyDown={event => {
          // set the value of the user's answer
          let inputValue = event.target.value;

          // listen for enter keydown
          if (event.key === 'Enter') {
            // first 2 problem sets are case insensitive
            if (problemSet === 1) {
              inputValue = inputValue.toUpperCase();
            } else if (problemSet === 2) {
              inputValue = inputValue.toLowerCase();
            }

            event.target.value = ''; // clears the input box

            // module answerEvent.js
            answerEvent(
              inputValue, // the user's given answer
              problem.answer, // the correct answer
              correctTally, // total correct tally (state)
              setCorrectTally, // to set total correct tally (set state)
              problemSet, // current problem set (state)
              setProblemSet, // to increment the problem set (state) if correct >= 20
              setLevelEvent // to set a level up event and display `LevelUp` component on rerender (set state)
            );
          }
        }}
      />
    </div>
  );
}
