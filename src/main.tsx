import React from "react";
import ReactDOM from "react-dom/client";

import { HomePage } from "./pages/Home";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);
