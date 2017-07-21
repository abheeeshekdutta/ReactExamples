// Application entrypoint.

// Load up the application styles
//require("../styles/home.scss");
require("../styles/starwars.scss");
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'
import { Home, About, Contact} from './app6.jsx'
//import { Router, Route, Link, browserHistory, IndexRoute ,hashHistory } from 'react-router'
//import App from './App.jsx';
import App1 from './app1.jsx';
import App2 from './app2.jsx';
import App3 from './app3.jsx';
import App4 from './app4.jsx';
import App5 from './app5.jsx';
//import App6 from './app6.jsx';
import App from './app6.jsx';
/*ReactDOM.render((
     <BrowserRouter>
          <Route path="/" component={App}/>
          
     </BrowserRouter>
     ),
     document.getElementById('react-root')
);*/

import BootEg from './boot.jsx';
import Bookings from './bookings.jsx';
import TopComponent from './shopping.jsx';
import MainComp from './starwars.jsx';
//------------------------------------------------Examples import below------------------------------------------
import Example1 from './eg1.jsx';
import Example2 from './eg2.jsx';
import Example3 from './eg3.jsx';
import Example4 from './eg4.jsx';

ReactDOM.render(<MainComp/>, document.getElementById('react-root'));
