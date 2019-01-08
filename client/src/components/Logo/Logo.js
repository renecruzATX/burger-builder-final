import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

//renders the burger logo on the top left
const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Cruz Burger" />
    </div>
);

export default logo;