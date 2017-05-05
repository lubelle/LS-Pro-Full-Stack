import React, { Component } from 'react';

import NewUser from './components/NewUser';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<NewUser />
      </div>
    );
  }
}

export default App;
