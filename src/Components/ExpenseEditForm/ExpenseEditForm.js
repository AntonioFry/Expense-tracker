import React, { Component } from 'react';
import './ExpenseEditForm.css';

class ExpenseEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      accountId: '',
      date: '',
      amount: '',
      categoryId: '',
    }
  }

  componentDidUpdate() {
    const { reviewedExpense } = this.props;
    if (this.state.id !== reviewedExpense.id && reviewedExpense.id !== undefined) {
      this.setState({ id: reviewedExpense.id })
      this.setState({ accountId: reviewedExpense.account })
      this.setState({ date: reviewedExpense.date })
      this.setState({ amount: reviewedExpense.amount })
      this.setState({ categoryId: reviewedExpense.category })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitChange = (e) => {
    e.preventDefault();
    const { primaryFormAction, toggleForm, formType} = this.props;
    const newData = { ...this.state };
    primaryFormAction('expenseData', newData);
    toggleForm( formType, false, {})
  }

  render() {
    const { toggleForm, formType } = this.props; 
    return (
      <section className="faded-background">
        <form className='expense-edit-form'>
          <button className='close-window-btn' onClick={() => toggleForm(formType, false, {})}>X</button>
          <label className="form-labels">Account</label>
          <input
            className="edit-expense-input"
            name="accountId"
            value={this.state.accountId}
            onChange={(e) => this.handleChange(e)}
          />
          <label className="form-labels">Date</label>
          <input
            className="edit-expense-input"
            name="date"
            value={this.state.date}
            onChange={(e) => this.handleChange(e)}
          />
          <label className="form-labels">Amount</label>
          <input
            className="edit-expense-input"
            name="amount"
            value={this.state.amount}
            onChange={(e) => this.handleChange(e)}
          />
          <label className="form-labels">Category</label>
          <input
            className="edit-expense-input"
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
      </section>
    )
  }
}

export default ExpenseEditForm;