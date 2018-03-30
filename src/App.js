import React, { Component } from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import SavedBar from './components/SavedBar';
import ResultsBar from './components/ResultsBar';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Title />
      <SearchBar />
      <ResultsBar />
      <SavedBar />
      </div>
    );
  }
}

export default App;
