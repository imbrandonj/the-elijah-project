// imported hooks:
import { useState, useEffect } from 'react';

/*
  Timer component

  A timer that intervals seconds &
  displays time in min:seconds
*/
export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  // update the state `seconds` every second
  useEffect(() => {
    // interval ID
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    // clean up interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  // store time data in local storage
  localStorage.setItem('time', seconds.toString());

  // format time into minutes:seconds
  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60; // local seconds var, not state
    return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
  };

  // display Timer
  return (
    <div id="timerWrapper">
      <p id="timer">{formatTime(seconds)}</p>
    </div>
  );
}
