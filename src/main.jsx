import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createRoot } from "react-dom/client";
import Home from "@/pages/Home";
import Success from '@/pages/Success'
import Error from '@/pages/Error'
import NotFound from '@/pages/NotFound';
import "@/global.css";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
