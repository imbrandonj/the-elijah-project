import './Timer.css'; // component styles

// imported hooks:
import { useState, useEffect } from 'react';

/*
  Timer component

  A timer that intervals seconds,
  stores the seconds in local storage, 
  & displays time in min:seconds
*/
export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  // update the state `seconds` every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        const newSeconds = prev + 1;
        localStorage.setItem('time', newSeconds.toString());
        return newSeconds;
      });
    }, 1000);

    // clean up interval
    return () => clearInterval(interval);
  }, []);

  // format time into minutes:seconds
  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60; // local seconds var, not state
    return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
  };

  // display Timer
  return (
    <div id="timerWrapper">
      <p className="timer">{formatTime(seconds)}</p>
    </div>
  );
}
