import React from 'react';
import Categories from './Components/Categories/Categories'
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="appTitle">To-Do List</h1>
        <Categories/>
      </div>
    )
  }
}

