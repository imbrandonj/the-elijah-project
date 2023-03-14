export default function Footbox({ correct }) {
  const footbox = Array(20)
    .fill()
    .map((_, i) => <span key={i} className="box"></span>);

  return <div id="footBox">{footbox}</div>;
}

// How this works:
// I create an empty array of 20 indices
// The empty fill() method fills the array with "undefined" values
// The array is mapped to include 20 className "box" span elements
// The _ underscore argument is a throwaway variable to make it clear that the variable is not being used
// The "_" could be named "box" which would be an adequate name
