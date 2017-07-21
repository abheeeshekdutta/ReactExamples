//Alert using forms
//30th May 2017

import React from 'react';

class eg4 extends React.Component
{
    submitText()
    {
        var val = this.refs.form_data.value;
        alert('Welcome to the site, ' + val + '!');
    }

    render()
    {
        return(
            <div>
                <input ref="form_data" type="text" placeholder="Enter name here"></input>
                <button onClick={this.submitText.bind(this)}>ALERT NOW!</button>
            </div>
        );
    }
}

export default eg4;