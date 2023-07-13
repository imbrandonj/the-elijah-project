import { createRoot } from 'react-dom/client';

// imported components:
import MainMenu from './views/Menu/MainMenu/MainMenu.jsx';

const App = () => {
  return (
    <div>
      <MainMenu />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);