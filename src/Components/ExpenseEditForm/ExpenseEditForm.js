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

  componentDidUpdate() {
    const { reviewedExpense } = this.props;
    if (this.state.categoryId !== reviewedExpense.categoryId) {
      this.setState({ accountId: reviewedExpense.accountId })
      this.setState({ date: reviewedExpense.date })
      this.setState({ amount: reviewedExpense.amount })
      this.setState({ categoryId: reviewedExpense.categoryId })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitChange = (e) => {
    e.preventDefault();
    const { reviewedExpense, submitExpenseChanges, toggleEditForm } = this.props;
    const editedExpense = { ...this.state, id: reviewedExpense.id };
    submitExpenseChanges(editedExpense);
    toggleEditForm( false, {})
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
          value={this.state.accountId}
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
          value={this.state.categoryId}
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