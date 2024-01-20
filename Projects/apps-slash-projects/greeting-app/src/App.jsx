import React from "react";
import Nav from "./components/Nav";
import Forumm from "./components/Forumm";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Forumm />} />
      </Routes>
    </div>
  );
}

export default App;
