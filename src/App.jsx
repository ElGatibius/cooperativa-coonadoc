import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NosotrosPage from './pages/nosotros';
import Blog from './pages/Blog';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
  );
}

export default App;