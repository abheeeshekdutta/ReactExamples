//Just testing alert functions and calls
//Date: 24th May 2017

import React from 'react';

class App extends React.Component {
  
  function1()
  {
    alert('Function 1');
  }

  function2()
  {
    alert('Function 2');
  }

  render() {
  
  var myStyle = {
    fontSize:85,
    color:'lightgreen'
  }
  return (
        <div>
          <h1 style={myStyle}>Hello there. This is a styled heading!</h1>
          <button onClick={this.function1}>Function 1</button><br/><br/><br/><br/>
          <button onClick={this.function2}>Function 2</button>
        </div>
    );
  }
}

export default App;
