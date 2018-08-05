import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//importing the diff views
import Feel from '../Feel/Feel';
import Comprehension from '../Comprehension/Comprehension';
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
          <br />
          <Switch>
            <Redirect exact from="/" to="/feel" />
            <Route path="/feel" component={Feel} />
            <Route path="/comprehension" component={Comprehension} />
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

const mapStateToProps = (state) => {
  return {
    feedback: state.feedBackStorage
  }
}

export default connect(mapStateToProps)(App);
