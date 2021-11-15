import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from "./Components/Dashboard"


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>  
      </Router>
      
    </div>
  );
}

export default App;
