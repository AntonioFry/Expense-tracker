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
      </form>
    )
  }
}

export default AccountForm;