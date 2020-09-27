import React from 'react';
import './ExpenseCard.css';

const ExpenseCard = ({ id, date, account, category, amount, toggleEditForm, removeData }) => {
  return (
      <tr>
        <td className="table-box">{date}</td>
        <td className="table-box">{account}</td>
        <td className="table-box">${amount}</td>
        <td className="table-box">{category}</td>
        <td className="table-btn">
          <button className="expense-card-btn" onClick={() => toggleEditForm(true, { id, date, account, category, amount })}>Edit</button>
        </td>
        <td className="table-btn">
          <button className="expense-card-btn" onClick={() => removeData('expenseData', id)}>Remove</button>
        </td>
      </tr>
  )
}

export default ExpenseCard