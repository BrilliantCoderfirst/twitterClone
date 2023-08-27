import React from "react";
import "./App.css";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="twitter">
      <Routes>
        <Route exact path="/twitterClone" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
