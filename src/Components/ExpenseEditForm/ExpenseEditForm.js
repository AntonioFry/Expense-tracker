import React, { Component } from 'react';
import './ExpenseEditForm.css';

class ExpenseEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: '',
      date: '',
      amount: '',
      categoryId: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitChange = (e) => {
    e.preventDefault();
    const { reviewedExpense, submitExpenseChanges } = this.props;
    const editedExpense = { ...this.state, id: reviewedExpense.id };
    submitExpenseChanges(editedExpense);
  }

  render() {
    const { reviewedExpense } = this.props;
    return (
      <form className='expense-edit-form'>
        <h2>Editing Expense #{reviewedExpense.id}</h2>
        <label className="form-labels">Account</label>
        <input
          className="edit-expense-input"
          name="accountId"
          placeholder={reviewedExpense.accountId}
          value={this.state.account}
          onChange={(e) => this.handleChange(e)}
        />
        <label className="form-labels">Date</label>
        <input
          className="edit-expense-input"
          placeholder={reviewedExpense.date}
          name="date"
          value={this.state.date}
          onChange={(e) => this.handleChange(e)}
        />
        <label className="form-labels">Amount</label>
        <input
          className="edit-expense-input"
          placeholder={reviewedExpense.amount}
          name="amount"
          value={this.state.amount}
          onChange={(e) => this.handleChange(e)}
        />
        <label className="form-labels">Category</label>
        <input
          className="edit-expense-input"
          placeholder={reviewedExpense.categoryId}
          name="categoryId"
          value={this.state.category}
          onChange={(e) => this.handleChange(e)}
        />
        <button 
          className="submit-change-btn"
          onClick={(e) => this.submitChange(e)}
          >Submit Changes
        </button>
      </form>
    )
  }
}

export default ExpenseEditForm;