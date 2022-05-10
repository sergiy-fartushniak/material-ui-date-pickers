import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { TestComponent } from './components/TestComponent';

import './App.css';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TestComponent />
      </MuiThemeProvider>
    );
  }
}
