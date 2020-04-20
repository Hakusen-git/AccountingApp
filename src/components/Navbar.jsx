import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{textAlign:'center', background:'#333333'}}className = 'navBar'>
                    <button style={btnStyle} onClick={this.props.setAll.bind(this)} className='nav'>All</button>
                    <button style={btnStyle} className='nav' onClick={this.props.setDeposit.bind(this)}>Deposit</button>
                    <button style={btnStyle} className='nav' onClick={this.props.setExpense.bind(this)}>Expense</button>
                
            </div>
        )
    }
}

const btnStyle = {
    border: 'none',
    display: 'inline',
    marginRight: '50px',
    marginLeft: '70px',
    padding: '5px 9px',
    cursor: 'pointer',
    color: '#fff',
    background: '#333333'
}