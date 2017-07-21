//To increase counter based on button click
//30th May 2017
import React from 'react';

class eg2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { count: 0};
    }

    incCount()
    {
        this.setState({
            count : this.state.count + 1
        })
    }

    render()
    {
        return(
            <div>
                <h1>Count is : {this.state.count}</h1>
                <button onClick = {this.incCount.bind(this)}>Increase</button>
            </div>
        )
    }
}

export default eg2;