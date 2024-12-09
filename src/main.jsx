import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);

root.render(
  <div className="min-h-screen flex justify-center items-center bg-blue-100">
    <Watch></Watch>
  </div>
);

function Watch() {
  return (
    <h1 className="text-6xl text-red-500 bg-blue-200 p-3 w-fit rounded-lg">
      ⌚ This is a watch.
    </h1>
  );
}
