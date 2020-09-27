import React, { Component } from 'react';
import AccountCard from '../AccountCard/AccountCard';
import AccountForm from '../AccountForm/AccountForm';
import './AccountDashboard.css';

class AccountDashboard extends Component {
  constructor() {
    super();
    this.state = {
      editFormToggled: false,
      addFormToggled: false,
      reviewedAccount: {},
    }
  }

  toggleForm = async (type, boolean, data) => {
    if (type === 'edit') {
      await this.setState({ editFormToggled: boolean });
      await this.setState({ reviewedAccount: data });
    } else if (type === 'add') {
      await this.setState({ addFormToggled: boolean })
    }
  }

  render() {
    const { accountData, addData, changeData, removeData } = this.props;
    const mappedAccounts = accountData.map(account => {
      return (
        <AccountCard 
          id={account.id}
          key={account.id * Date.now()}
          removeData={(type, targetDataId) => removeData(type, targetDataId)}
          title={account.title}
          color={account.color}
          type={account.type}
          toggleForm={(type, boolean, data) => this.toggleForm(type, boolean, data)}
        />
      )
    });
    return (
      <section className="account-dashboard-section">
        {mappedAccounts}
        { this.state.addFormToggled === true ? 
          <AccountForm
            reviewedAccount={this.state.reviewedAccount}
            key={Date.now()}
            formType={'add'}
            toggleForm={(type, boolean, data) => this.toggleForm(type, boolean, data)}
            primaryFormAction={(type, data) => addData(type, data)}
          /> : null }
        {this.state.editFormToggled === true ? 
          <AccountForm
            reviewedAccount={this.state.reviewedAccount}
            key={Date.now()}
            formType={'edit'}
            toggleForm={(type, boolean, data) => this.toggleForm(type, boolean, data)}
            primaryFormAction={(type, newData) => changeData(type, newData)}
          /> : null}
        { this.state.addFormToggled === false ?
          <button className="add-account-btn" onClick={() => this.toggleForm('add', true, {})}>+</button>
        : null }
      </section>
    )
  }
}

export default AccountDashboard;