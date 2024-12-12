import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@/pages/Home";
import Practice from "@/Practice";
import "@/global.css";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);
root.render(
  <React.StrictMode>
    <Practice />
  </React.StrictMode>,
);
