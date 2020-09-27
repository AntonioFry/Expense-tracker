import React, { Component } from 'react';

class AccountForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      type: '',
      color: 'lightblue'
    }
  }

  componentDidUpdate() {
    const { reviewedAccount } = this.props;
    if (this.state.id !== reviewedAccount.id && reviewedAccount.id !== undefined) {
      this.setState({ id: reviewedAccount.id })
      this.setState({ title: reviewedAccount.title })
      this.setState({ type: reviewedAccount.type })
      this.setState({ color: reviewedAccount.color })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitChange = (e) => {
    e.preventDefault();
    const { primaryFormAction, toggleForm, formType } = this.props;
    const newData = { ...this.state };
    primaryFormAction('accountData', newData);
    toggleForm(formType, false, {});
  }

  render() {

    const possibleColors = ['lightblue', 'lightcoral', 'lightgreen', 'lightsalmon', 'lightgrey'];
    const colorOptions = possibleColors.map(color => {
      return (
        <option value={color}>{color.split('').splice(5)}</option>
      )
    })

    return (
      <form className="account-form">
        <label className="form-labels">Title</label>
        <input
          className="edit-expense-input"
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
        />
        <label className="form-labels">Type</label>
        <input
          className="edit-expense-input"
          name="type"
          value={this.state.type}
          onChange={(e) => this.handleChange(e)}
        />
        <label className="form-labels">Color</label>
        <select
          className="edit-expense-input"
          type='select'
          name="color"
          value={this.state.color}
          onChange={(e) => this.handleChange(e)}
        >
          {colorOptions}
        </select>
        <button onClick={(e) => this.submitChange(e)}>Submit</button>
      </form>
    )
  }
}

export default AccountForm;