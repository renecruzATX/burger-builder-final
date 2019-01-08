import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl.js'

//provides the ingredients desired for the burger
const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

//automatically renders the ingredients available in the burger builder
const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={styles.OrderButton}
            disabled={!props.purchaseable} 
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN IN TO ORDER'}</button>
    </div>
);


export default buildControls;