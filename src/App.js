//The import statement is used to import bindings
//which are exported by another module. The import
//keyword imports a JavaScript entity that was
//exported (using the export keyword) in another
//file. Webpack uses import commands to determine
//which scripts and assets to bundle
import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <ToDo />
          <ToDo />
        </ul>
      </div>
    );
  }
}

export default App;
