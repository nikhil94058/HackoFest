import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Trends from './components/Trends';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SliderC from './components/SliderC';
import PropertyPage from './Pages/PropertyPage'
import Chatbot from './components/Chatbot';
import { Auth } from './components/auth';
import './App.css';
import Sell from './Pages/Sell';


function App() {
  return (
    <>
      <Router>
        <Chatbot />
        <div>
          <Navbar />
          <Sidebar />
          <Trends />
          <Sell />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" component={<SliderC />} />
            {/*<Route path="/property/:id" component={PropertyPage} />*/}
            <Route path="/test" element={<Sell />} />
          </Routes>
        </div>
      </Router>
      <div classname="App">
        <Auth />
      </div>
    </>
  );
}

export default App;
