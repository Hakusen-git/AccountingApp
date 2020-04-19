import React, { Component } from 'react';
import Account from './Account.jsx';

export default class Accounts extends Component {
    render() {
        return (this.props.filterAccount.map((account) => (
            <Account  key= {account.id} account = {account} delAccount={this.props.delAccount}/>
            ))
        )
    }
}
