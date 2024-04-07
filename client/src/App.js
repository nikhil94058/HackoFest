import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Trends />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
