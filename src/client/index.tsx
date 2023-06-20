import ReactDOM from "react-dom/client";
import { toastConfig } from "react-simple-toasts";
import { App } from "./App.tsx";

import "@fontsource/vt323";
import "react-simple-toasts/dist/theme/dark.css";
import "./index.css";

toastConfig({
  theme: "dark",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
