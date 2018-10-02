//  Packages
import React, { Component } from 'react';
// Components
import Head from './Components/header/Head';
//  Style
import style from './App.css';
import sassStyle from './style.scss'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
      <Head />
        <p className={style.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={sassStyle.testscss}>Sass</p>
      </div>
    );
  }
}

export default App;
