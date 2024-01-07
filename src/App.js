import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'Vikash';
  render() {
    return (
      <div>
        This is my first class based Component {this.c}
      </div>
    )
  }
}
