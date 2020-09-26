import React from 'react';

const AccountCard = ({ id, title, color, type }) => {
  const headerColorStyle = {
    'backgroundColor': color
  }
  return (
    <article>
      <header className='account-card-header' style={headerColorStyle}>
        <h3>Account #{id}</h3>
      </header>
      <p><span className="account-info-label">Account Title:</span> {title}</p>
      <p><span className="account-info-label">Type:</span> {type}</p>
    </article>
  )
}

export default AccountCard;