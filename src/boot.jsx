//Using react-bootstrap
//31st May 2017

import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Dropdown from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class bootEg extends React.Component{

    show()
    {
        alert('Warning clicked');
    }

    render()
    {
        return(
                <div>
                    <ButtonGroup>
                        <Button bsStyle="warning"  bsSize="xsmall" onClick={this.show.bind(this)}>Warning</Button>
                        <Button bsStyle="success" bsSize="large">Success</Button>
                        <Button bsStyle="primary" bsSize="large">Primary</Button>
                        <Dropdown title="Dropdown" id="bg-nested-dropdown">
                              <MenuItem eventKey="1">Dropdown link</MenuItem>
                              <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </Dropdown>
                    </ButtonGroup>
                </div>
        );
    }

}
export default bootEg;