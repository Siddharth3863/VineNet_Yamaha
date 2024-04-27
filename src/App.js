import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import ImageView from "./components/ImageView.js";
import ImageUpload from "./components/ImageUpload.js";



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route index element={<ImageUpload />} />
      <Route path="/home" element={<ImageUpload />} />
      <Route path="/display" element={<ImageView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;