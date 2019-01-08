import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

//provides a summary of burger chosen and price before submitting order
const checkoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Hope it tastes Great!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>Cancel</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>Continue</Button>
        </div>
    );

};

export default checkoutSummary;