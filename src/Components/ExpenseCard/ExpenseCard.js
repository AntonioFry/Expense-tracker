import React, { Component } from 'react';
import './ExpenseCard.css';

const ExpenseCard = ({ date, account, category, amount }) => {
  return (
      <tr>
        <td className="table-box">{date}</td>
        <td className="table-box">{account}</td>
        <td className="table-box">${amount}</td>
        <td className="table-box">{category}</td>
        <td className="table-btn"><button className="expense-card-btn">Edit</button></td>
        <td className="table-btn"><button className="expense-card-btn">Remove</button></td>
      </tr>
  )
}

export default ExpenseCard