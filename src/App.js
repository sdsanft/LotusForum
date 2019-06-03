import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './components/nav';
import Board from './components/board';
import Profile from './components/profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Board} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
