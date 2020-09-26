import React, { Component } from 'react';
import './ExpenseCard.css';

class ExpenseCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      account: this.props.account,
      category: this.props.category,
      amount: this.props.amount,
      date: this.props.date,
    }
  }

  render () { 
    const { date, account, category, amount } = this.state;
    return (
        <tr>
          <td className="table-box">{date}</td>
          <td className="table-box">{account}</td>
          <td className="table-box">${amount}</td>
          <td className="table-box">{category}</td>
        </tr>
    )
  }
}

export default ExpenseCard