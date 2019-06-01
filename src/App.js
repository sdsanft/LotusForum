import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/nav';
import Board from './components/board';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className='app'>
          <Nav />
          <Board />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
