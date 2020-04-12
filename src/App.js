import React from 'react';
import './App.css';
import HeaderUnit from "./components/Header.unit/Header.unit.js"
import NextRaceUnit from './components/NextRace.unit/NextRace.unit';
import CarAnimation from './components/CarAnimation.unit/CarAnimation.unit';

function App() {


  return (
    <div >
      <HeaderUnit />
      <CarAnimation />
      <div className="App">
        <NextRaceUnit />
      </div>
    </div>
  );
}

export default App;

