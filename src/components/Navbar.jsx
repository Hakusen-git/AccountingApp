import React, {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{textAlign: 'center', background:'#333333'}}className = 'navBar'>
                <ul style={{padding: '0'}}>
                    <li style = {{fontSize: '18px', paddingLeft: '60px', paddingRight: '60px', display: 'inline',color: '#fff'}} className='nav'>Home</li>
                    <li style = {{fontSize: '18px', paddingRight: '60px',display: 'inline',color: '#fff'}} className='nav'>Deposit</li>
                    <li style = {{fontSize: '18px', paddingRight: '60px',display: 'inline',color: '#fff'}} className='nav'>Expense</li>
                </ul>
                
            </div>
        )
    }
}

