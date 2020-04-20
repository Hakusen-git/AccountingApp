import React, { Component } from 'react';

class SearchBox extends Component {
    

    render() {
        return (
            <div style={{textAlign:'center', paddingTop:'10px'}}>
                <p style= {{marginBottom: '5px'}}>Search By Detail</p>
                <input style= {{width:'200px'}} onChange={this.props.handleSearch.bind(this)} type="text" />
            </div>
        )
    }
}


export default SearchBox;