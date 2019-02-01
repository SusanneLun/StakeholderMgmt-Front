import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import ManageStakeholder from './ManageStakeholder'
import Navbar from './Navbar'


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/PI_chart" component={App} />
      <Route exact path="/manage_stakeholder/:id" component={ManageStakeholder} />
    </React.Fragment>
  </Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
