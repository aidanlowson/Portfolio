//  Packages
import React, { Component } from 'react';
// Components
import Head from './Components/header/Head';
//  Style
import style from './App.scss';
import sassStyle from './style.scss'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
      <Head />
        <p className={style.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className={sassStyle.testscss}>
          <p>Sass</p>
        </div>
      </div>
    );
  }
}

export default App;
