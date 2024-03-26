import { createContext, useContext, useState } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);

  // play audio method
  const playAudio = src => {
    // pause current audio if playing
    if (audio) {
      audio.pause();
    }

    // new audio mp3
    const newAudio = new Audio(src);
    newAudio.play();

    // set audio in state
    setAudio(newAudio);
  };

  // stop audio method
  const stopAudio = () => {
    if (audio) {
      audio.pause();
      setAudio(null);
    }
  };

  return (
    <AudioContext.Provider value={{ playAudio, stopAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  return useContext(AudioContext);
};
