import React, { Component } from 'react';
import './hoverButton.css';

class Account extends Component {
   
    render() {
        

        const {id, type, catagory, detail, date, amount} = this.props.account;
        
      

        return (
            <div style={{background: '#f8f8f8', margin: '10px auto', border: '3px solid #ff8b3d', textAlign: 'center', padding: '10px', display:'flex'}}>
                <p style={pStyle}>{type}</p>
                <p style={pStyle}>{catagory}</p>
                <p style={pStyle}>{detail}</p>
                <p style={pStyle}>{date}</p>
                <p style={pStyle}>${amount}</p>
                <button className="button"  onClick={this.props.delAccount.bind(this, id)} >Delete</button> 
            </div>
        )
    }
}

const pStyle = {
    fontSize: '25px',
    background: '#f8f8f8',
    borderBottomWidth: '9',
    borderColor: '#eee',
    flex: '4',
    margin: '0'
}


export default Account;