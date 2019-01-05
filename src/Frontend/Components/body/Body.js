import React from 'react';
import style from './style.scss';


const body = () => {
    return (
    <div>
        <p className={style.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className={style.testscss}>
          <p>Sass</p>
        </div>
    </div>
    )
}

export default body;