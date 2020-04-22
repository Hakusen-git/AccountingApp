import React, {Component} from 'react';
import { Spring } from 'react-spring/renderprops';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{textAlign:'center', background:'#333333'}}className = 'navBar'>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{delay: 1000, duration: 1000}}>
                {props => (
                    <div style={props}>
                    <button style={btnStyle} onClick={this.props.setAll.bind(this)} className='nav'>All</button>
                    <button style={btnStyle} className='nav' onClick={this.props.setDeposit.bind(this)}>Deposit</button>
                    <button style={btnStyle} className='nav' onClick={this.props.setExpense.bind(this)}>Expense</button>
                    </div>
                )}
        
            </Spring>
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