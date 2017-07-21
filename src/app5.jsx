//Refs example
//29th May 2017
import React from 'react';

class app5 extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            arr: []
        }
    }

    change()
    {
        var val = this.refs.newText.value;
        this.state.arr.push(val);
        console.log(this.state.arr);
    }

    display()
    {
        //alert('Test')
        this.setState({
            arr:this.state.arr.map((arr) => { 
            return(
                <div>
                    <h1>{arr}</h1>
                </div>
                )
            })
        });
    }
    
    test()
    {
        return(
                <h1>Test clicked</h1>
        );

    }

    render()
    {
        return(
                <div>
                    <h1>Enter text to be addded to the array </h1>
                    <input ref= "newText" type="text" name="input_t"></input>                
                    <button onClick={this.change.bind(this)}>CHANGE</button>                                    
                    <button onClick={this.display.bind(this)}>DISPLAY</button>
                                   
                    <button onClick={this.test}>TEST</button>
                    
                </div>
        );

    }

}
export default app5;