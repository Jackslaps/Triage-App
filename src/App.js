import React from 'react';
import NavBar from './component/NavBar'
import './App.css'
import { BrowserRouter as Router, _Switch, _Route } from "react-router-dom";
import Scanner from './component/QR-Scan/QR-Reader';
import AVPU from './component/AVPU/avpu';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Scanner />
        {/* <AVPU /> */}
      </div>
    </Router>
  );
}

export default App;
