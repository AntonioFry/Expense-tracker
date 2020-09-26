import React, { Component } from 'react';

class ExpenseEditForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <form>
        <input
          className="edit-expense-input"
          placeholder="Account"
          name="account"
          value={this.state.account}
          onChange={(e) => this.handleChange(e)}
        />
      </form>
    )
  }
}

export default ExpenseEditForm;