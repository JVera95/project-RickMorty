import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Character from "./components/Character";
import Characters from "./components/Characters";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Characters />} />
        <Route path="characters/:characterId" element={<Character />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
