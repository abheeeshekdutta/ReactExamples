//React-router example
//30th May 2017
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export default class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}
export class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

export class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}


export class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}
