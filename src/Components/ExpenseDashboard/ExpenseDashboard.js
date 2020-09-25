import React, { Component } from 'react';
import './ExpenseDashboard.css';

class ExpenseDashboard extends Component {
  constructor() {
    super();
    this.state = {
      expenseData: [],
      categoryData: [],
      accountData: [],
    }
  }

  render() {
    return (
      <section className='expense-dashboard-container'>
        
      </section>
    )
  }
};

export default ExpenseDashboard;