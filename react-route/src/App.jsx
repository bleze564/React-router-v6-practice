import { useState } from "react";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
