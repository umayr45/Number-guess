import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Lets play🚀!</h3>

        <BrowserRouter>
          <Main/>
        
        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
