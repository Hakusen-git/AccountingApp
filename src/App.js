import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import AddAccount from './components/AddAccount.jsx';
import Accounts from './components/Accounts.jsx';
import SearchBox from './components/SearchBox.jsx';
import TotalAmount from './components/TotalAmount.jsx';
import {uuid} from 'uuidv4';


class App extends React.Component {
  state = {
    accounts: [
      {
        id: uuid(),
        type: 'Deposit',
        catagory: 'Food',
        detail: 'Countdown',
        date: '03/04/2020',
        amount: 300
      }
    ],

    search: '',
    type: ''
  }

  addAccount = (account) => {
    const newAccount = account;

    this.setState({ accounts: [...this.state.accounts, newAccount] });
  }

  delAccount = (id) => {
    this.setState({ accounts: [...this.state.accounts.filter(account => account.id !== id)] });
  }

  handleSearch = (e) => {
      this.setState({ search: e.target.value });
  }

  setDeposit = (e) => {
    this.setState({ type: 'Deposit' });
  }

  setExpense = (e) => {
    this.setState({ type: 'Expense' });
  }

  setAll = (e) => {
    this.setState({ type: '' });
  }

  render(){

    

    let filtered = this.state.accounts.filter((account) => {
      return (account.detail.toLowerCase().includes(this.state.search.toLowerCase()) 
              && account.type.toLowerCase().includes(this.state.type.toLowerCase()));
    });

    var total = filtered.reduce((total,account) => {
      return Number(total) + + Number(account.amount);
    }, 0)

    return (
      <div className="App">
        <Header />
        <Navbar setAll={this.setAll} setDeposit={this.setDeposit} setExpense={this.setExpense}/>
        <AddAccount addAccount={this.addAccount}/>
        <SearchBox handleSearch={this.handleSearch} />
        <Accounts  filterAccount={filtered} delAccount={this.delAccount}/>
        <TotalAmount total={total} />
     </div>
    );
  }
}

export default App;
