import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@telegram-apps/telegram-ui/dist/styles.css";
import App from "./App";
import initTg from "./initTg";

initTg();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
