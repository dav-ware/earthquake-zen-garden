import React, { Component } from 'react';
import Home from './components/home'
import Profile from './components/profile'
import Detail from './components/detail'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
    render() { 
        return (
            <Router>
                <React.Fragment>
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/detail' component={Detail} />
                  </Switch>
                </React.Fragment>
            </Router>
        );
    }
}
 
export default App;