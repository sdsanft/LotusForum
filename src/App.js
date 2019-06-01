import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className='app'>
          <h1>Lotus Forums</h1>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
