import React from 'react';
import logo from '../../../Res/logo.svg';
import style from './style.css';

const head = () => {
    return (
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>Welcome to My Portfolio</h1>
        </header>
    )
}

export default head;