import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

//importing the diff views
import Feel from '../Feel/Feel';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import Success from '../Success/Success';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Switch>
        <Redirect exact from="/" to="/feel" />
        <Route path="/feel" component={Feel} />
        <Route path="/understand" component={Understand} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
        <Route path="/success" component={Success} />
        <Route path="/admin" component={Admin} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
