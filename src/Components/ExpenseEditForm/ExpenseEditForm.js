import React, { Component } from 'react';
import './ExpenseEditForm.css';

class ExpenseEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      date: '',
      amount: '',
      category: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form className='expense-edit-form'>
        <h2>Editing Expense #{this.props.id}</h2>
        <label className="form-labels">Account</label>
        <input
          className="edit-expense-input"
          name="account"
          value={this.state.account}
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
          name="category"
          value={this.state.category}
          onChange={(e) => this.handleChange(e)}
        />
        <button className="submit-change-btn">Submit Changes</button>
      </form>
    )
  }
}

export default ExpenseEditForm;