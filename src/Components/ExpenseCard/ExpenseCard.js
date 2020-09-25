import React, { Component } from 'react';
import './ExpenseCard.css';

class ExpenseCard extends Component {
  constructor() {
    super(this.props)
    this.state = {
      account: this.props.account,
      category: this.props.category,
      amount: this.props.amount,
      date: this.props.date,
    }
  }

  render () { 
    const { date, account, category, amount } = this.state;
    return (
      <div>
        <tr>
          <td contentEditable="true">{date}</td>
          <td contentEditable="true">{account}</td>
          <td contentEditable="true">{amount}</td>
          <td contentEditable="true">{category}</td>
        </tr>
        <button className="edit-button">edit</button>
      </div>
    )
  }
}

export default ExpenseCard