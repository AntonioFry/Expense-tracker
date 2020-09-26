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
        <tr>
          <td className="table-box" contentEditable={editable}>{date}</td>
          <td className="table-box" contentEditable={editable}>{account}</td>
          <td className="table-box" contentEditable={editable}>${amount}</td>
          <td className="table-box" contentEditable={editable}>{category}</td>
          { editable === false ? <button className="edit-button" onClick={() => this.toggleEditable()}>edit</button> : null }
          {editable === true ? <button className="submit-button" onClick={() => this.toggleEditable()}>Submit Changes</button> : null }
        </tr>
    )
  }
}

export default ExpenseCard