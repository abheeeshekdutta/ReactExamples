//Zoom in/out the image
//Date: 26th May 2017
import React from 'react';

var amt = 10;

function incAmt()
{
    amt=amt+20;
}
class Example extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {height:150};
    }

    zoomIn()
    {
        this.setState({
            height: this.state.height-amt
        })
    }

    zoomOut()
    {
        this.setState({
            height: this.state.height+amt
        })
    }

    render(){
        return(
            <div id="container">
                <img src = "https://goo.gl/bWhMqt" height={this.state.height} id="t3"></img>
                <br/><br/>
                <div>
                    <button onClick={this.zoomIn.bind(this)}>Zoom In</button>
                    <button onClick={this.zoomOut.bind(this)}>Zoom Out</button><br/>
                    <button onClick={incAmt}>INCREASE AMOUNT</button>
                  
                    
                </div>
            </div>
        );
}

}

export default Example;