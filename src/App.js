import React, { Component } from 'react';
import './App.css';

import ConnectedLoadingIndicator from './components/general/ConnectedLoadingIndicator';
import Contents from './components/contents';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Contents />
        <ConnectedLoadingIndicator />
      </div>
    );
  }
}

export default App;
