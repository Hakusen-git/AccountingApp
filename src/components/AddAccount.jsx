import React, {Component} from 'react';
import {uuid} from 'uuidv4';

class AddAccount extends Component{
    state =  {
            id: uuid(),
            type: 'Deposit',
            catagory: 'Food',
            detail: '',
            date: '',
            amount: 0,
            detailError: '',
            dateError: '',
            amountError: ''
        
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

   

    onSubmit = (e) => {
        e.preventDefault();

      
        this.props.addAccount(this.state)
        
        this.setState(
            {
                id: uuid(),
                type: this.state.type,
                catagory: this.state.catagory,
                detail: '',
                date: this.state.date,
                amount: 0,
                detailError: '',
                dateError: '',
                amountError: ''

            }
        )
        
    }

    render() {
        return(
            <form  onSubmit={this.onSubmit} style={{paddingTop: '10px', display:'flex'}}className="container">
                <select value={this.state.type ? this.state.type : ''} name= "type" onChange={this.onChange} style = {{flex:'5', padding: '5px'}} className="select">
                    <option value="Deposit">Deposit</option>
                    <option value="Expense">Expense</option>
                </select>

                <select value={this.state.catagory ? this.state.catagory : ''} name ="catagory" onChange={this.onChange} style = {{flex:'5', padding: '5px'}} className="select">
                    <option value= "Food">Food</option>
                    <option value= "Clothes">Clothes</option>
                    <option value= "Transportation">Transportation</option>
                    <option value= "Rent">Rent</option>
                </select>
                
                <input value={this.state.detail} onChange={this.onChange} style = {{flex:'10'}} type="text" name="detail" placeholder="Please enter detail of this transaction" className="form"/>
                <div style={{color: 'red'}}>{ this.state.detailError }</div>
                <input value={this.state.date} onChange={this.onChange} style = {{flex:'10'}} type="date" name="date"/>
                <div style={{color: 'red'}}>{ this.state.dateError }</div>
                <input value={this.state.amount} onChange={this.onChange} style = {{flex:'10'}} type="text" name="amount" placeholder="$" />
                <div style={{color: 'red'}}>{ this.state.amountError }</div>
                <input style = {{flex:'3'}} type="submit" name="Submit" value="Add" />
            </form>
        )
    }
}

export default AddAccount;