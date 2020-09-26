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
          <td className="table-box">{date}</td>
          <td className="table-box">{account}</td>
          <td className="table-box">${amount}</td>
          <td className="table-box">{category}</td>
          {editable === false ? <td className="table-btn"><button className="edit-button" onClick={() => this.toggleEditable()}>edit</button></td> : null}
          {editable === true ? <td className="table-btn"><button className="submit-button" onClick={() => this.toggleEditable()}>Cancel</button></td> : null}
        </tr>
    )
  }
}

export default ExpenseCard