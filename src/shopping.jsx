//Shopping portal
//Date: 8th June 2017

import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Alert from 'react-bootstrap/lib/Alert';
import Modal from 'react-bootstrap/lib/Modal';

var f_data = require('./fruitsdata.js');
//Topmost component excluding table
class TopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
    }

    render() {
        return (
            <div>
                <div className="mainContainer">
                    <img className='mainImage' src="./src/ShoppingImages/fruitstop.jpg"></img>
                    <h1 className='topHead'> React Store </h1>
                </div>

                <div className="topText">
                    <p><b> Welcome to React's fruit store!</b></p>
                    <p><i>Please select the items that you wish to buy and add them to the shopping cart</i></p>
                    <p><i> When you are done, click the shopping cart(<img src="./src/ShoppingImages/cart.png" width="20" height="20"></img>) to review your order and check out</i></p>
                </div>
                <br /><br />
                <TableComponent />
            </div>
        )
    }
}

class CheckoutModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: this.props.list,
            total_amt: this.props.tot_cost,
            total_quant: this.props.tot_items,
            test: 0
        }
    }
    /*componentWillReceiveProps(nextProps)
    {
        this.setState({
            list1: nextProps.list
        })
    }*/
    setQuant(r) {
        console.log(r);       
        
        r.count = r.target.value;
    }

    componentWillUnmount() {
        console.log("Unmounting child");
    }

    updateQuantAndPrice(c, r) {
        return (
            <div>
                <input type="number" onChange={this.setQuant} placeholder={r.count} min="0" default={r.count}></input>
            </div>
        )
    }

    priceFormatter(c, r) {
        let final_tot = 0
        if (r.name == "Apple") {
            return (
                <div>
                    <p>{r.count * 10}</p>
                </div>
            )
        }
        else if (r.name == "Pineapple") {
            return (
                <div>
                    <p>{r.count * 15}</p>
                </div>
            )
        }
        else if (r.name == "Grape") {
            return (
                <div>
                    <p>{r.count * 20}</p>
                </div>
            )
        }
        else if (r.name == "Grapefruit") {
            return (
                <div>
                    <p>{r.count * 25}</p>
                </div>
            )
        }
        else if (r.name == "Papaya") {
            return (
                <div>
                    <p>{r.count * 20}</p>
                </div>
            )
        }

    }

    render() {
        console.log(this.state.test)
        return (
            <div>
                <p>Thank you for shopping at the React Fruit Store!</p>
                <p>The following is your purchase summary, here you can add more items, go back to the store or check out</p>
                {console.log(this.state.list1)}
                <BootstrapTable data={this.state.list1} condensed striped hover>
                    <TableHeaderColumn isKey dataField='name' dataAlign='center'>Fruit Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='' dataFormat={this.updateQuantAndPrice.bind(this)} dataAlign='center'>Fruit Count</TableHeaderColumn>
                    <TableHeaderColumn dataField='' dataFormat={this.priceFormatter.bind(this)} dataAlign='center'>Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

//Table Component including search field
class TableComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            items: 0,
            initialItems: f_data,
            inventory: [],
            modal_opened: false,
            clicked_data: [
                {
                    "name": "Apple",
                    "count": 0
                },
                {
                    "name": "Pineapple",
                    "count": 0
                },
                {
                    "name": "Grape",
                    "count": 0
                },
                {
                    "name": "Grapefruit",
                    "count": 0
                },
                {
                    "name": "Papaya",
                    "count": 0
                }
            ]

        }
    }

    imageFormatter(cell, row) {
        return "<img src='" + cell + "' width='100' height='100'/>";
    }

    buttonClicked(c, r) {
        let self = this;
        console.log(r.name);

        if (r.name == "Apple") {
            var item = Object.assign({}, self.state.clicked_data[0].name, { name: "Apple", count: self.state.clicked_data[0].count + 1 });
            self.state.clicked_data[0] = item
            self.setState({
                total: self.state.total + r.price,
                items: self.state.items + 1,
                clicked_data: self.state.clicked_data
            })
        }

        else if (r.name == "Pineapple") {
            var item = Object.assign({}, self.state.clicked_data[1].name, { name: "Pineapple", count: self.state.clicked_data[1].count + 1 });
            self.state.clicked_data[1] = item
            self.setState({
                total: self.state.total + r.price,
                items: self.state.items + 1,
                clicked_data: self.state.clicked_data
            })
        }
        else if (r.name == "Grape") {
            var item = Object.assign({}, self.state.clicked_data[2].name, { name: "Grape", count: self.state.clicked_data[2].count + 1 });
            self.state.clicked_data[2] = item
            self.setState({
                total: self.state.total + r.price,
                items: self.state.items + 1,
                clicked_data: self.state.clicked_data
            })
        }
        else if (r.name == "Grapefruit") {
            var item = Object.assign({}, self.state.clicked_data[3].name, { name: "Grapefruit", count: self.state.clicked_data[3].count + 1 });
            self.state.clicked_data[3] = item
            self.setState({
                total: self.state.total + r.price,
                items: self.state.items + 1,
                clicked_data: self.state.clicked_data
            })
        }
        else if (r.name == "Papaya") {
            var item = Object.assign({}, self.state.clicked_data[4].name, { name: "Papaya", count: self.state.clicked_data[4].count + 1 });
            self.state.clicked_data[4] = item
            self.setState({
                total: self.state.total + r.price,
                items: self.state.items + 1,
                clicked_data: self.state.clicked_data
            })
        }
    }

    buttonFormatter(cell, row) {
        return <Button bsStyle="success" onClick={this.buttonClicked.bind(this, cell, row)}>Add to cart</Button>;
    }

    close() {
        this.setState({ modal_opened: false });
    }

    open() {
        this.setState({ modal_opened: true });
    }


    render() {
        return (
            <div id="Container">
                <img id="cart" src="./src/ShoppingImages/cart.png" onClick={this.open.bind(this)}></img>
                <Modal bsSize="large" show={this.state.modal_opened} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modaltitle">Checkout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CheckoutModal list={this.state.clicked_data} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <BootstrapTable data={this.state.initialItems.fruits} search searchPlaceholder='Which product would you like to search?' condensed striped hover>
                    <TableHeaderColumn isKey dataField="link" dataFormat={this.imageFormatter} dataAlign='center'>Image</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataAlign='center'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='description' dataAlign='center' >Product Description</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' dataAlign='center' dataSort='true'>Product Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='' dataFormat={this.buttonFormatter.bind(this)} dataAlign='center'></TableHeaderColumn>
                </BootstrapTable>
                <Alert bsStyle="warning">
                    <strong>Items: </strong> {this.state.items}
                    <br />
                    <strong>Total Amount: </strong> ₨ {this.state.total}
                </Alert>

                {this.state.modal_opened === true ? <CheckoutModal list={this.state.clicked_data} tot_items={this.state.items} tot_cost={this.state.total} /> : ""}
            </div>
        )
    }


}

export default TopComponent;