import React, { Component } from 'react';
import ExpenseCard from '../ExpenseCard/ExpenseCard';
import './ExpenseDashboard.css';

class ExpenseDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { expenseData } = this.props;

    const mappedExpenseData = expenseData.map(expense => {
      return (
        <ExpenseCard
          id={expense.id}
          amount={expense.amount}
          account={expense.accountId}
          category={expense.categoryId}
          date={expense.date}
        />
      )
    });

    return (
      <section className='expense-dashboard-container'>
        { expenseData === [] ? null :
          <table className='expense-data-table'>
            <thead>
              <tr>
                <th className='table-box'>Date</th>
                <th className='table-box'>Account</th>
                <th className='table-box'>Amount</th>
                <th className='table-box'>Category</th>
              </tr>
            </thead> 
            <tbody>
              {mappedExpenseData}
            </tbody>
          </table>
        }
      </section>
    )
  }
};

export default ExpenseDashboard;