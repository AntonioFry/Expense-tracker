import React, { Component } from 'react';
import ExpenseCard from '../ExpenseCard/ExpenseCard';
import './ExpenseDashboard.css';
import ExpenseEditForm from '../ExpenseEditForm/ExpenseEditForm';

class ExpenseDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormToggled: false,
      addFormToggled: false,
      reviewedExpense: {},
    }
  }

  toggleForm = async (type, boolean, data) => {
    if (type === 'edit') {
      await this.setState({ editFormToggled: boolean });
      await this.setState({ reviewedExpense: data });
    } else if (type === 'add') {
      await this.setState({ addFormToggled: boolean })
    }
  };

  render() {
    const { editFormToggled, addFormToggled, reviewedExpense } = this.state;
    const { expenseData, removeData, changeData, addData } = this.props;

    const mappedExpenseData = expenseData.map(expense => {
      return (
        <ExpenseCard
          id={expense.id}
          key={expense.id * Date.now()}
          amount={expense.amount}
          account={expense.accountId}
          category={expense.categoryId}
          date={expense.date}
          removeData={(type, targetDataId) => removeData(type, targetDataId)}
          toggleForm={(type, boolean, data) => this.toggleForm(type, boolean, data)}
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
        { this.state.addFormToggled === false ? 
          <button className="add-expense-btn" onClick={() => this.toggleForm('add', true, {})}>+</button>
        : null }
        { editFormToggled === false ? null : 
          <ExpenseEditForm
            key={Date.now()}
            reviewedExpense={reviewedExpense}
            formType={'edit'}
            toggleForm={(type ,boolean, data) => this.toggleForm(type ,boolean, data)}
            primaryFormAction={(type, boolean, newData) => changeData(type, boolean, newData)}
          /> 
        }
        { addFormToggled === false ? null :
          <ExpenseEditForm
            key={Date.now()}
            reviewedExpense={reviewedExpense}
            formType={'add'}
            toggleForm={(type, boolean, data) => this.toggleForm(type, boolean, data)}
            primaryFormAction={(type, boolean, newData) => addData(type, boolean, newData)}
          />
        }
      </section>
    )
  }
};

export default ExpenseDashboard;