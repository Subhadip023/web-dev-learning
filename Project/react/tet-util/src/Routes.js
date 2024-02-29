import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import TextFrom from './components/TextFrom';

const Routes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<TextFrom />} />
    </Routes>
  );
};

export default Routes;
