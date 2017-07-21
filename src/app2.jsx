//Append data at the end of a string after each button click.
//Date: 24th May 2017

import React from 'react';

class a extends React.Component{
    constructor()
    {
        super();
        this.state={
            original:"" //Initially empty
            }
        }
    
    manipulate=()=>
    {
        var msg = this.state.original + " " + form1.elements["data"].value //Update message
        //alert('Before');
        this.setState({
            original:msg
        })
        
        //alert('After');
    } 

    render()
    {
        return(
               <div>
                   <div id="t1">Enter data here <form name="form1" method="POST"><input type="text" name="data"></input></form></div>
                   <br/>
                   <button onClick={this.manipulate.bind(this)}>Add</button>
                   <h3 id="t2">{this.state.original}</h3>
                </div>
        );
    }
}


export default a;