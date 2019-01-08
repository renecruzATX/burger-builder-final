import React from 'react';

import styles from './DrawerToggle.module.css';

//renders the menu button in mobile view
const drawerToggle = (props) => (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;