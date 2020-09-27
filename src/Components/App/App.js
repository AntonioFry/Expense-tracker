import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { mockExpenseData } from '../../Data/mockExpenseData';
import './App.css';
import ExpenseDashboard from '../ExpenseDashboard/ExpenseDashboard';
import { mockAccountData } from '../../Data/mockAccountData';
import AccountDashboard from '../AccountDashboard/AccountDashboard';
import { mockCategoryData } from '../../Data/mockCategoryData';
import CategoryDashboard from '../CategoryDashboard/CategoryDashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageToggled: 'landing page',
      expenseData: mockExpenseData,
      accountData: mockAccountData,
      categoryData: mockCategoryData
    }
  }

  addData = (type, data) => {
    const newDataCollection = this.state[type];
    data.id = newDataCollection.length + 1;
    newDataCollection.unshift(data);
    this.setState({ [type]: newDataCollection });
  }

  changeData = (type, newData) => {
    const newDataCollection = this.state[type].map(data => {
      return data.id === newData.id ? newData : data;
    });
    this.setState({ [type]: newDataCollection });
  }

  removeData = (type, targetDataId) => {
    const newDataCollection = this.state[type].filter(data => {
      return data.id === targetDataId ? null : data;
    });
    this.setState({ [type]: newDataCollection });
  };

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
    const { expenseData, accountData, categoryData } = this.state
    return (
      <main>
        <header className="page-header">
          <h1 className="header-title">Expense Tracker</h1>
          <div className="nav-button-container">
            <button className="nav-button" onClick={() => this.changePage('landing page')}>Home</button>
            <button className="nav-button" onClick={() => this.changePage('expense')}>Expenses</button>
            <button className="nav-button" onClick={() => this.changePage('account')}>Account</button>
            <button className="nav-button" onClick={() => this.changePage('category')}>Category</button>
          </div>
        </header>
        { this.state.pageToggled === 'landing page' ? <LandingPage /> : null }
        { this.state.pageToggled === 'expense' ? 
          <ExpenseDashboard 
            expenseData={expenseData}
            removeData={(type, targetDataId) => this.removeData(type, targetDataId)}
            changeData={(type, newData) => this.changeData(type, newData)}
            addData={(type, data) => this.addData(type, data)}
          /> 
        : null }
        { this.state.pageToggled === 'account' ? 
          <AccountDashboard
            accountData={accountData}
            removeData={(type, targetDataId) => this.removeData(type, targetDataId)}
            changeData={(type, newData) => this.changeData(type, newData)}
            addData={(type, data) => this.addData(type, data)}
          /> 
        : null }
        { this.state.pageToggled === 'category' ?
          <CategoryDashboard
            categoryData={categoryData}
            removeData={(type, targetDataId) => this.removeData(type, targetDataId)}
            changeData={(type, newData) => this.changeData(type, newData)}
            addData={(type, data) => this.addData(type, data)}
          />
        : null }
      </main>
    );
  }
}

export default App;
