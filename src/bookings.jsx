//Bookings page
//31st May 2017

import React from 'react';
import Label from 'react-bootstrap/lib/Label';
import Well from 'react-bootstrap/lib/Well';
import Collapse from 'react-bootstrap/lib/Collapse';
import Button from 'react-bootstrap/lib/Button';
var text = {
    backgroundColor: ' #809fff',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'white'
}

var tableS = {
    border: "1px solid black",
    //borderCollapse: "collapse"
}

var data = require('./data1.js');
var moment = require('moment');
var monthFinal;


class InnerComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            d_data: this.props.sent_days_data,
            stateArr: []

        }
    }

componentWillReceiveProps(nextProps)
{
    this.setState({
        d_data: nextProps.sent_days_data
    })
}

undo()
{
    var self = this
    var lengthArr = self.state.stateArr.length;//Calculate length of the backup array
    var set = self.state.stateArr.pop();
    var length_f = set.length;

    self.state.d_data.splice((new Date(set[0].date_d)).getDate(),0,set[0]);
    console.log('Happy bday Gaurav' +(new Date(set[0].date_d)).getDate())
    var newundo = self.state.stateArr;
    self.setState({
        d_data: self.state.d_data,
        stateArr: newundo
    })
}

rowRemoved(num)
{
    var index=num;
    var backup,i,check;
    var self = this;
    backup = this.state.d_data;
    for(i=0;i<backup.length;i++)
    {
        if(i==index)
        {
            check = backup.splice(i,1);
            self.state.stateArr.push(check);
            break;            
        }
    }
    var assign = self.state.stateArr;
    this.setState({
        d_data: backup,
        stateArr: assign
    })
}
    //Logic to calculate entries starting from third row
    func() {
        var self = this;
        console.log(self.state.d_data)
        return self.state.d_data.map
            (
            function (dayname, index1) 
            {                
                return (
                    <tr>
                        <td><Button bsSize="xsmall" bsStyle="warning" onClick={self.rowRemoved.bind(self,index1)}>Remove</Button><br/><b>{dayname.date_d}</b></td>
                        <td><b>{dayname.day_d}</b></td>
                        {
                            data.accommodation.rooms.map
                                (
                                function (room, index2) {
                                    for (var i = 1; i <= data.bookings.length; i++) {
                                        if (data.bookings[i-1].allocatedRoom.name === room.name) {
                                            var date_n = moment(dayname.date_d,"DD/MM/YYYY");
                                            var startDate = moment(data.bookings[i-1].checkinDate,"DD/MM/YYYY");
                                            var endDate = moment(data.bookings[i-1].checkoutDate,"DD/MM/YYYY");
                                            if (date_n.isAfter(startDate) && date_n.isBefore(endDate) || (date_n.isSame(startDate) || date_n.isSame(endDate))) {
                                                return (
                                                    <td id="cellGreen">{data.bookings[i-1].requesterName}</td>
                                                );
                                            } 
                                        }                                       
                                    }
                                 return(<td id="cellRed">-</td>);
                                }
                                
                                )
                        }
                    </tr>
                );
            }

            )
    }
    render() {
        return (
            <div>
                <Button bsSize="small" bsStyle="info" onClick={() => this.setState({ open: !this.state.open })}>Show/Hide</Button>
                <br /><br />
                <Collapse in={this.state.open}>
                    { //
                    }
                    <div>
                        <table style={tableS}>
                            <tbody>
                                <Button bsSize="xsmall" bsStyle="warning" onClick={this.undo.bind(this)}>Undo</Button>
                                {//1st row}
                                }
                                <tr id="thcolours">
                                    <td colSpan="2"></td>
                                    {
                                        data.accommodation.rooms.map(
                                            function (room) {
                                                return <td>Room no.{room.name}</td>
                                            }
                                        )
                                    }
                                </tr>
                                {//2nd row}
                                }
                                <tr id="thcolours">
                                    <td>Date</td>
                                    <td>Day</td>
                                    {
                                        data.accommodation.rooms.map
                                            (
                                            function (room) {
                                                return <td>Name</td>
                                            }
                                            )
                                    }
                                </tr>
                                {                              
                                    this.func()
                                }

                            </tbody>
                        </table>
                    </div>
                </Collapse>
            </div>
            
            
        );
    }
}

class MainComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            month: "",
            days_data: []
        }
        
        monthFinal = this.state.month;
    }
    
    componentWillReceiveProps(nextProps)
    {
        this.setState({
            days_data: nextProps.days_data
        })
    }

    getNumberOfDays(year, month) {
        var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
        return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }


    calcMonth() {
        var mySelect = this.refs.monthSel.value;
        var monthNum;
        if (mySelect == "January")
            monthNum = 0;
        else if (mySelect == "February")
            monthNum = 1;
        else if (mySelect == "March")
            monthNum = 2;
        else if (mySelect == "April")
            monthNum = 3;
        else if (mySelect == "May")
            monthNum = 4;
        else if (mySelect == "June")
            monthNum = 5;
        else if (mySelect == "July")
            monthNum = 6;
        else if (mySelect == "August")
            monthNum = 7;
        else if (mySelect == "September")
            monthNum = 8;
        else if (mySelect == "October")
            monthNum = 9;
        else if (mySelect == "November")
            monthNum = 10;
        else if (mySelect == "December")
            monthNum = 11;
        //Below code to set days of the month according to day
        var i, j, d;
        let arr = [];
        var finaldata = [];
        let day_arr_final = [];
        var formatted_date;
        var numdays = this.getNumberOfDays(2017, monthNum)
        for (i = 0; i < numdays; i++) {
            d = new Date(2017, monthNum, i)
            arr[i] = d.getDay();
            if (arr[i] == 6)
                day_arr_final[i] = "Sunday"
            else if (arr[i] == 0)
                day_arr_final[i] = "Monday"
            else if (arr[i] == 1)
                day_arr_final[i] = "Tuesday"
            else if (arr[i] == 2)
                day_arr_final[i] = "Wednesday"
            else if (arr[i] == 3)
                day_arr_final[i] = "Thursday"
            else if (arr[i] == 4)
                day_arr_final[i] = "Friday"
            else if (arr[i] == 5)
                day_arr_final[i] = "Saturday"
    
        if(monthNum>9)
        {
            if (i < 9)                
                formatted_date ="0" + (i + 1) + "/" +(monthNum + 1) + "/2017"
            else
                formatted_date =(i + 1) + "/" +(monthNum + 1) + "/2017"
        }
        else if(monthNum<9)
        {           
            if (i < 9)
                formatted_date = "0" + (i + 1) + "/" + "0" + (monthNum + 1) + "/2017"
            else
                formatted_date = (i + 1) + "/" + "0" + (monthNum + 1) + "/2017"
        }
        finaldata.push({ 
                    date_d: formatted_date,
                    day_d: day_arr_final[i]
                })
         this.setState({
            month: monthNum,
            days_data: finaldata
        })
    }
    }

    render() {
        return (
            <div>
                <h1><Label style={text}>View Bookings</Label></h1>
                <span>Choose month: </span>
                <select ref="monthSel">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <Button bsStyle="success" bsSize="xsmall" onClick={this.calcMonth.bind(this)}>Submit</Button>
                <InnerComp sent_days_data={this.state.days_data} />
            </div>
        );
    }
}

export default MainComp;