import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

class Header extends Component{
    

    render(){
        return(
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{duration: 1000}}>
                {props => (
                    <div style ={props}> 
                        <div  style = {headerStyle}className="header">
                        <h1 style = {{paddingTop: '15px', fontFamily: "'Baloo Bhaina 2'", color: '#fff'}}>Accounting App</h1>
                        </div>
                    </div>
                )}
            </Spring>
            
        )
    }

}

const headerStyle = {
    
    background: '#6495ED',
    display : 'flex',
    alignItems: 'center',
    padding: '1.5rem'
}


export default Header;