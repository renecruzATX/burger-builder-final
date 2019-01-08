import React from 'react';
import styles from './Order.module.css';
import Button from '../UI/Button/Button';

//renders an order that is retrieved from the database
const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName , 
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount}) </span>
    });

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
            <Button 
                clicked={props.orderDetails} 
                btnType='Success'>Order Details</Button>
            <Button 
                clicked={props.orderDelete} 
                btnType='Danger'>Delete Order</Button>
        </div>            
    );
    
};

export default order;