import React, { Component } from 'react';

class Header extends Component{

    render(){
        return(
            <div  style = {headerStyle}className="header">
                <h1 style = {{paddingTop: '15px', fontFamily: "'Baloo Bhaina 2'", color: '#fff'}}>Accounting App</h1>
            </div>
        )
    }

}

const headerStyle = {
    
    background: '#6495ED',
    display : 'flex',
    alignItems: 'center'
}


export default Header;