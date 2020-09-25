import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';

class App extends Component {


  render () {
    return (
      <main>
        <header className="page-header">
          <h1 className="header-title">Expense Tracker</h1>
          <button>Home</button>
          <button>Dashboard</button>
        </header>
        <LandingPage />
      </main>
    );
  }
}

export default App;
