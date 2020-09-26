import React, { Component } from 'react';
import AccountCard from '../AccountCard/AccountCard';
import AccountForm from '../AccountForm/AccountForm';
import './AccountDashboard.css';

class AccountDashboard extends Component {
  constructor() {
    super();
    this.state = {
      formToggled: true,
    }
  }

  render() {
    const { accountData, addAccount } = this.props;
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
        <AccountForm
          addAccount={(type, data) => addAccount(type, data)}
        />
      </section>
    )
  }
}

export default AccountDashboard;