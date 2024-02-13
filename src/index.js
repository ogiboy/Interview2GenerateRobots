import { createRoot } from "react-dom/client";
import { Provider } from "./context/robots";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider>
    <App />
  </Provider>
);
