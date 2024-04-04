/*
  Footbox.jsx component

  `correct` prop is `correctTally` (state)
*/

import './Footbox.css';

export default function Footbox({ correct }) {
  const footbox = Array(20).fill();

  for (let i = 0; i < 20; i++) {
    if (i < correct) {
      footbox[i] = <span key={i} className="filledFootbox"></span>;
    } else {
      footbox[i] = <span key={i} className="emptyFootbox"></span>;
    }
  }
  return (
    <div id="footbox" className="flex justify-center">
      {footbox}
    </div>
  );
}

// How this works:
// I create an empty array of 20 indices
// The empty fill() method fills the array with "undefined" values
// The array is mapped to include 20 className "box" span elements
// The _ underscore argument is a throwaway variable to make it clear that the variable is not being used
// The "_" could be named "box" which would be an adequate name
