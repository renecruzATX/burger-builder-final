import React from 'react';
import styles from './Spinner.module.css';

//renders when retrieving data from db
const spinner = () => (
    <div className={styles.Loader}>Loading...</div>
);
export default spinner;