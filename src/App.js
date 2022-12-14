import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
