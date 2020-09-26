import React, { Component } from 'react';
import AccountCard from '../AccountCard/AccountCard';

class AccountDashboard extends Component {

  render() {
    const { accountData } = this.props;
    const mappedAccounts = accountData.map(account => {
      return (
        <AccountCard 
          id={account.id}
          title={account.title}
          color={account.color}
          type={account.type}
        />
      )
    });
    return (
      <section className="account-dashboard-section">
        {mappedAccounts}
      </section>
    )
  }
}

export default AccountDashboard;