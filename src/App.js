import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className='app'>
          <Nav />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
