import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';

class App extends Component {


  render () {
    return (
      <main>
        <header className="page-header">
          <h1 className="header-title">Expense Tracker</h1>
          <div className="nav-button-container">
            <button className="nav-button">Home</button>
            <button className="nav-button">Dashboard</button>
          </div>
        </header>
        <LandingPage />
      </main>
    );
  }
}

export default App;
