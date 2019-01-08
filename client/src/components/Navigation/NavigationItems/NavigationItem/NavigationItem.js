import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './NavigationItem.module.css';

//renders each Navigation link in the top right of the app
const navigationItem = (props) => (
    <li className={styles.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={styles.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;