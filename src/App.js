// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsConatiner from './components/news/NewsContainer';

export default class App extends Component {
  // c = 'Vikash';
  render() {
    return (
      <div>
        {/* This is my first class based Component {this.c} */}
        <Navbar />
        <NewsConatiner pageSize={6} />
      </div>
    )
  }
}
