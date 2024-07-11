import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";

import { ProvideContext } from "./Hooks/use-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProvideContext>
      <App />
    </ProvideContext>
  </React.StrictMode>
);
