import React from 'react';
import styles from './Backdrop.module.css';

//renders a backdrop when modals appear
const backdrop = (props) => (
    props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;