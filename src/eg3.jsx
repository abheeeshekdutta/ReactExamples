//Increment and Decrement counter
//30th May 2017

import React from 'react';

class eg3 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {count: 0};
    }

    changeCount(val)
    {
            this.setState({
            count: this.state.count +val
        })
    }

    render()
    {
        return(
        <div>
            <h1>Count is : {this.state.count}</h1>
            <button onClick={() => this.changeCount(1)}>Increase</button>
            <button onClick={() => this.changeCount(-1)}>Decrease</button>
        </div>
        );
    }

}
export default eg3;