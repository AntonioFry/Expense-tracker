import React, { Component } from 'react';
import AccountCard from '../AccountCard/AccountCard';
import AccountForm from '../AccountForm/AccountForm';
import './AccountDashboard.css';

class AccountDashboard extends Component {
  constructor() {
    super();
    this.state = {
      editFormToggled: false,
      addFormToggled: true
    }
  }

  render() {
    const { accountData, addData, editData } = this.props;
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
        { this.state.addFormToggled === true ? <AccountForm
          primaryFormAction={(type, data) => addData(type, data)}
        /> : null }
        {this.state.editFormToggled === true ? <AccountForm
          primaryFormAction={(type, data) => editData(type, data)}
        /> : null}
      </section>
    )
  }
}

export default AccountDashboard;