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
      editable: false
    }
  }

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable })
  }

  render () { 
    const { date, account, category, amount, editable } = this.state;
    return (
      <div className='table-row-container'>
        <tr>
          <td contentEditable={editable}>{date}</td>
          <td contentEditable={editable}>{account}</td>
          <td contentEditable={editable}>{amount}</td>
          <td contentEditable={editable}>{category}</td>
        </tr>
        { editable === false ? <button className="edit-button">edit</button> : null }
        { editable === true ? <button className="submit-button">Submit Changes</button> : null }
      </div>
    )
  }
}

export default ExpenseCard