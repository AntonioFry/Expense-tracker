import React, { Component } from 'react';

class AccountForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      type: '',
      color: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const possibleColors = []
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
        <input
          className="edit-expense-input"
          type='select'
          name="color"
          value={this.state.color}
          onChange={(e) => this.handleChange(e)}
        />
      </form>
    )
  }
}

export default AccountForm;