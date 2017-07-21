//Append data in an external array and manipulate using Map function
//Date:25th May 2017
import React from 'react';
class Comp extends React.Component{

    constructor(props)
    {
        var arr = [];
        super(props);   
        this.state = {arr};   
    }

    updateArray=()=>
    {
        //alert('Button clicked');
        var msg_n; 
        msg_n= this.state.arr + f1.elements["data"].value;
        //alert('Before pushing')
        console.log(this.state.arr);
        console.log(msg_n);
        this.state.arr.push({msg_n})
        console.log(this.state.arr);
        //console.log(this.msg_n);
       // alert('Pushed')
        this.setState({
                arr:msg_n
        })
    }

    render()
    {
        return(
            <div>
                <h1 id ="t1">Enter text:</h1>
                <form name="f1">
                    <input type="text" name="data"></input>
                </form>
                <button onClick={this.updateArray.bind(this)}>CLICK ME</button>
        {this.state.arr.map((arrq, index) => (
        <p>{arrq.arr}</p>
        ))}
            </div>
        );
    }
}

export default Comp;