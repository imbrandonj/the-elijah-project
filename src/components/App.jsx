import { createRoot } from "react-dom/client";

import MainMenu from "./MainMenu";

const App = () => {
  return (
    <div>
      <MainMenu />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
