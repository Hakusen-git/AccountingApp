import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import AddAccount from './components/AddAccount.jsx';
import Accounts from './components/Accounts.jsx';
import SearchBox from './components/SearchBox.jsx';
import {uuid} from 'uuidv4';

class App extends React.Component {
  state = {
    accounts: [
      {
        id: uuid(),
        type: 'Deposit',
        catagory: 'Food',
        detail: 'Taiping',
        date: '03/04/2020',
        amount: '$300'
      }
    ],

    search: ''
  }

  addAccount = (account) => {
    const newAccount = account;

    this.setState({ accounts: [...this.state.accounts, newAccount] });
  }

  delAccount = (id) => {
    this.setState({ accounts: [...this.state.accounts.filter(account => account.id !== id)] });
  }

  handleSearch = (e) => {
      this.setState({ search: e.target.value })
  }


  render(){
    let filtered = this.state.accounts.filter((account) => {
      return account.detail.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <div className="App">
        <Header />
        <Navbar />
        <AddAccount addAccount={this.addAccount}/>
        <SearchBox handleSearch={this.handleSearch} />
        <Accounts  filterAccount={filtered} delAccount={this.delAccount}/>
     </div>
    );
  }
}

export default App;
