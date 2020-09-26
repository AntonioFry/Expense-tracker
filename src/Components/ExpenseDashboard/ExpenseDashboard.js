import React, { Component } from 'react';
import ExpenseCard from '../ExpenseCard/ExpenseCard';
import './ExpenseDashboard.css';
import ExpenseEditForm from '../ExpenseEditForm/ExpenseEditForm';

class ExpenseDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormToggled: false,
      reviewedExpense: {},
    }
  }

  toggleEditForm = async (data) => {
    await this.setState({ editFormToggled: true });
    await this.setState({ reviewedExpense: data});
  };

  render() {
    const { editFormToggled, reviewedExpense } = this.state;
    const { expenseData } = this.props;

    const mappedExpenseData = expenseData.map(expense => {
      return (
        <ExpenseCard
          id={expense.id}
          amount={expense.amount}
          account={expense.accountId}
          category={expense.categoryId}
          date={expense.date}
          toggleEditForm={() => this.toggleEditForm(expense)}
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
        { editFormToggled === false ? null : 
          <ExpenseEditForm
            reviewedExpense={reviewedExpense}
            submitExpenseChanges={() => this.props.submitExpenseChanges()}
          /> 
        }
      </section>
    )
  }
};

export default ExpenseDashboard;