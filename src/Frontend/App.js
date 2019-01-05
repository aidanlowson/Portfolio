//  Packages
import React, { Component } from 'react';
// Components
import Head from './Components/header/Head';
import Body from './Components/body/Body'
//  Style
import style from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
      <Head />
      <Body />
      </div>
    );
  }
}

export default App;
