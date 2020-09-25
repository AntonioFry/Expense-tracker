import React, { Component } from 'react';

class ExpenseCard extends Component {
  constructor() {
    super(this.props)
    this.state = {
      accountId: null,
      categoryId: null,
      amount: null
    }
  }

  render () { 
    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
  }
}