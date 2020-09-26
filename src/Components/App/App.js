import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { mockExpenseData } from '../../Data/mockExpenseData';
import './App.css';
import ExpenseDashboard from '../ExpenseDashboard/ExpenseDashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageToggled: 'landing page',
      expenseData: mockExpenseData,
    }
  }

  submitExpenseChanges = (editedExpense) => {
    const newExpesneData = this.state.expenseData.map(expense => {
      if (editedExpense.id === expense.id) {
        return editedExpense
      } else {
        return expense
      }
    });
    this.setState({ expenseData: newExpesneData })
  };

  changePage = (pageName) => {
    this.setState({ pageToggled: pageName });
  }

  render () {
    const { expenseData } = this.state
    return (
      <main>
        <header className="page-header">
          <h1 className="header-title">Expense Tracker</h1>
          <div className="nav-button-container">
            <button className="nav-button" onClick={() => this.changePage('landing page')}>Home</button>
            <button className="nav-button" onClick={() => this.changePage('dashboard')}>Dashboard</button>
          </div>
        </header>
        { this.state.pageToggled === 'landing page' ? <LandingPage /> : null }
        { this.state.pageToggled === 'dashboard' ? 
          <ExpenseDashboard 
            expenseData={expenseData}
            submitExpenseChanges={(editedExpense) => this.submitExpenseChanges(editedExpense)}
          /> 
        : null }
      </main>
    );
  }
}

export default App;
