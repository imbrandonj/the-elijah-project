// ViewContext.jsx
import { createContext, useContext, useState } from 'react';

// default values, essential for app() initial rendering
const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState('MainMenu');
  const [level, setLevel] = useState(0);

  return (
    <ViewContext.Provider value={{ view, setView, level, setLevel }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  return useContext(ViewContext);
};
