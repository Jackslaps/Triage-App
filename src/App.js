import React from 'react';
import NavBar from './component/NavBar'
import './App.css'
import { Route } from "react-router";
import { BrowserRouter as Router, _Switch, _Route } from "react-router-dom";
import Scanner from './component/QR-Scan/QR-Reader';
import AVPU from './component/AVPU/avpu';
import Assistance from './component/AVPU/assistance';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Scanner />
        <Route exact path="/assistance">
          <Assistance />
        </Route>
        {/* <AVPU /> */}
      </div>
    </Router>
  );
}

export default App;
