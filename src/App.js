// App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { MobileApp } from './components/MobileApp';
import { Work } from './components/Work';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <MobileApp/>
      <Work/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
