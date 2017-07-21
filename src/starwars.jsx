//StarWars PoC
//Date: 13th June 2017

import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import $ from 'jquery';
let arr = []
let res = []
let nextUrl=""
let i = 0;
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active_user: this.props.sent_user,
            planet_data: [],            
            search: "",
            planets_loaded: 0,
            searched_data: [],
            i: 0,
        }
    }
    
    getData()
    {        
        console.log("Inside getData");
        console.log(arr[i].next);
        if(arr[i].next!=null)
        {
            $.ajax({
                url: arr[i].next,
                dataType: 'json',
                cache: false,
                success: function (data) {
                    console.log(arr)
                    arr.push(data)
                    i=i+1;
                    nextUrl=arr[i].next;
                    console.log('Iteration number :' + i)
                    this.getData();
                }.bind(this),
                error: function (xhr, status, err) {
                    alert('Failed to connect to the StarWars API!');
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
        else if(arr[i].next==null)
        {
            arr.sort(function(a,b)
            {
                return b.count - a.count
            })
            console.log(arr)
            this.setState({
                planets_loaded: 1
            })           
        }
        
    }

    componentWillMount() {
            $.ajax({
                url: 'http://swapi.co/api/planets/?page=1',
                dataType: 'json',
                cache: false,
                success: function (data) {
                    console.log(arr)
                    arr.push(data)
                    nextUrl=arr[i].next
                    this.getData();
                }.bind(this),
                error: function (xhr, status, err) {
                    alert('Failed to connect to the StarWars API!');
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
    }

    render() {
        return (
            <div>
                <h1>Successfully logged in as : {this.state.active_user.name}</h1>
                <ul>{this.state.planets_loaded ?
                    arr.map(function(planet)
                    {
                        res = planet.results.map(function(new1)
                        {                            
                             return <li>{new1.name} {new1.population}</li>
                        }
                        )
                        return <li>{res}</li>;
                    }
                         )
                    :""}
                </ul>
            </div>
        )
    }
}

class MainComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api_data: [],
            login_check: false,
            user: "",
            showForm: 1,
            userfound: 0
        }
    }

    checkToggle() {
        if (this.state.login_check == true) {
            form2.style.display = "none";
        }
        else {
            form2.style.display = "block";
        }
    }
    Login() {
        var self = this
        if (form1.elements["username"].value == '')
            alert('Please enter valid username');

        else if (form1.elements["password"].value == '')
            alert('Please enter valid password');

        self.state.api_data.results.map(
            function (item, index) {
                if (item.name == form1.elements["username"].value && item.birth_year == form1.elements["password"].value) {
                    self.setState({
                        login_check: true,
                        user: item,
                        userfound: 1
                    })
                }
            }
        )

    }

    fetchData() {
        $.ajax({
            url: 'http://192.168.2.15:8082/questions/all',
            dataType: 'json',
            cache: false,
            success: function (data) {
                alert('Successfully connected to the StarWars API, loading characters\' data');
                console.log(data);
                this.setState({
                    api_data: data
                }
                
                );
            }.bind(this),
            error: function (xhr, status, err) {
                alert('Failed to connect to the StarWars API!');
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        if (this.state.userfound == 1) {
            this.checkToggle();
        }

        return (
            <div>
                <div id="form2">
                    <h1 className="Top">StarWars Login Page</h1>
                    <p className="form">
                        <form name="form1">
                            <b>Enter username:</b>
                            <input type="text" name="username"></input><br />
                            <b>Enter password: </b>
                            <input type="password" name="password"></input>
                        </form>
                    </p>
                    <br />
                    <Button bsStyle="info" id="loadbutton" onClick={() => this.fetchData()}>Connect to API</Button><br /><br />
                    <Button bsStyle="success" id="loginbutton" onClick={() => this.Login()}>Login</Button>
                </div>
                {
                    this.state.login_check === true ? <SearchComponent sent_user={this.state.user} /> : ""
                }
            </div>
        )
    }

}
export default MainComp;