//Change text based on input, dynamically
//30th May 2017

import React from 'react';
import ReactDOM from 'react-dom';

class eg1 extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = { txt: ""}
    }

    setData()
    {
        var val = this.refs.data_t.value;
        this.setState({
                txt: val
        })
    }

    render()
    {
        return(
            <div>
               <input ref="data_t" type="text"  placeholder="Enter any text" onChange={this.setData.bind(this)}></input>
               <h1>{this.state.txt}</h1>
            </div>
        );
       
    }
}
export default eg1;