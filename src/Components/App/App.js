import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { mockExpenseData } from '../../Data/mockExpenseData';
import './App.css';
import ExpenseDashboard from '../ExpenseDashboard/ExpenseDashboard';
import { mockAccountData } from '../../Data/mockAccountData';
import AccountDashboard from '../AccountDashboard/AccountDashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageToggled: 'landing page',
      expenseData: mockExpenseData,
      accountData: mockAccountData,
    }
  }

  addData = (type, data) => {
    data.id = this.state[type].length + 1;
    this.state[type].shift(data);
  }

  changeData = (type, newData) => {
    this.state[type].map(account => {
      return account.id === newData.id ? newData : account;
    });
    this.setState({ [this.state[type]]: newData });
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
    const { expenseData, accountData } = this.state
    return (
      <main>
        <header className="page-header">
          <h1 className="header-title">Expense Tracker</h1>
          <div className="nav-button-container">
            <button className="nav-button" onClick={() => this.changePage('landing page')}>Home</button>
            <button className="nav-button" onClick={() => this.changePage('expense')}>Expenses</button>
            <button className="nav-button" onClick={() => this.changePage('account')}>Account</button>
          </div>
        </header>
        { this.state.pageToggled === 'landing page' ? <LandingPage /> : null }
        { this.state.pageToggled === 'expense' ? 
          <ExpenseDashboard 
            expenseData={expenseData}
            submitExpenseChanges={(editedExpense) => this.submitExpenseChanges(editedExpense)}
          /> 
        : null }
        { this.state.pageToggled === 'account' ? 
          <AccountDashboard
            accountData={accountData}
            addAccount={(type, data) => this.addData(type, data)}
          /> 
        : null }
      </main>
    );
  }
}

export default App;
