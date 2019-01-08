import React from 'react';
import Button from '../../../components/UI/Button/Button';

const ConfirmDelete = (props) => (
    <div>
        <h3>Are you sure you want to delete this order?</h3>
        <Button clicked={props.deleteOrder} btnType='Danger'>CLICK HERE TO DELETE!</Button>
    </div>
);

export default ConfirmDelete;