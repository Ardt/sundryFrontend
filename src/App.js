import React from 'react';
import Head from "next/head";
import logo from './logo.svg';
import { Counter } from './components/counter/Counter';
import Footer from './components/footer/Footer';
import NaverMap from './components/map/NaverMap';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NaverMap />
          {/* <Counter /> */}
          <Footer />
        </header>
      </div>
  </React.StrictMode>
  );
}

export default App;
