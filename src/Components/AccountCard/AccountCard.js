import React from 'react';
import './AccountCard.css';

const AccountCard = ({ id, title, color, type }) => {
  const headerColorStyle = {
    'backgroundColor': color
  }
  return (
    <article className="account-card">
      <header className='account-card-header' style={headerColorStyle}>
        <h3 className='account-card-heading'>Account #{id}</h3>
      </header>
      <p className="account-card-text"><span className="account-info-label">Account Title:</span> {title}</p>
      <p className="account-card-text"><span className="account-info-label">Type:</span> {type}</p>
    </article>
  )
}

export default AccountCard;