import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmark from "./pages/Bookmark";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
