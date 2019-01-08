import React from 'react';
import styles from './OrderDeets.module.css';

const OrderDeets = (props) => (
    <div className={styles.Font}>             
        <strong>Ingredients:</strong>
          <p className={styles.Line}>Lettuce: {props.order.ingredients.lettuce}</p>
          <p className={styles.Line}>Bacon: {props.order.ingredients.bacon}</p>
          <p className={styles.Line}>Cheese: {props.order.ingredients.cheese}</p>
          <p className={styles.Line}>Meat: {props.order.ingredients.meat}</p>
        <strong>Total Price: ${props.order.price.toFixed(2)}</strong>
        <br/><br/>
        <strong>Delivery Address:</strong>
          <p className={styles.Line}>Name: {props.order.orderData.name}</p>
          <p className={styles.Line}>Street: {props.order.orderData.street}</p>
          <p className={styles.Line}>City: {props.order.orderData.city}</p>
          <p className={styles.Line}>ZipCode: {props.order.orderData.zipCode}</p>
          <p className={styles.Line}>Email: {props.order.orderData.email}</p>
          <p className={styles.Line}>Delivery Method: {props.order.orderData.deliveryMethod}</p>
      </div>
);

export default OrderDeets;