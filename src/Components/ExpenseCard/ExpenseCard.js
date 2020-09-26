import React from 'react';
import './ExpenseCard.css';

const ExpenseCard = ({ id, date, account, category, amount, toggleEditForm }) => {
  return (
      <tr>
        <td className="table-box">{date}</td>
        <td className="table-box">{account}</td>
        <td className="table-box">${amount}</td>
        <td className="table-box">{category}</td>
        <td className="table-btn">
          <button className="expense-card-btn" onClick={() => toggleEditForm({ id, date, account, category, amount })}>Edit</button>
        </td>
        <td className="table-btn">
          <button className="expense-card-btn">Remove</button>
        </td>
      </tr>
  )
}

export default ExpenseCard