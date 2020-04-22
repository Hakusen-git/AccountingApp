import React, { Component } from 'react';

export default class TotalAmount extends Component {
    render() {
        return (
            <div style={{marginTop: '2rem', borderTop: '3px solid #ff8b3d'}}>
                <h3 style = {totalStyle}> Total: ${this.props.total}</h3>
            </div>
        )
    }
}

const totalStyle ={
    float: 'right',
    paddingRight: '270px',
    marginTop: '20px'
}
