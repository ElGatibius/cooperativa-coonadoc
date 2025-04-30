import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NosotrosPage from './pages/nosotros';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
    </Routes>
  );
}

export default App;