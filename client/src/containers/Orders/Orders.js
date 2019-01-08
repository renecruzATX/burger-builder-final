import React, {Component} from 'react';
import {connect} from 'react-redux';

import Order from '../../components/Order/Order';
import axios from 'axios';
//import withErrorHandler from '../../hoc/withErrorHander/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import OrderDeets from '../../containers/Orders/OrderDeets/OrderDeets';
import ConfirmDelete from '../../containers/Orders/ConfirmDelete/ConfirmDelete';

//renders past orders on the Orders page
class Orders extends Component {
    state = {
        show: false,
        deleted: null
    };

    //initializes the orders from the server
    componentDidMount () {
        this.props.onFetchOrders(this.props.token);
    }

    //sets the order props so a modal can be shown of the order details
    orderDetailsHandler (order) {
        this.props.onSetOrderId(order.order);
        this.setState({show:true});       
    }

    //Sets conditions for a Modal to pop up confirming the deletion of an order
    confirmDeleteHandler (order) {
        this.props.onSetOrderId(order._id);
        this.props.onConfirmDelete(true);
        this.setState({show:true, deleted: null});       
    }

    //deletes the selected order
    deletOrderHandler () {
        axios.delete('/orders/' + this.props.orderId)
                .then(response => {
                    this.setState({
                        deleted: response.data                        
                    })
                })
                .catch(error => error);                  
    }

    //closes any modals and resets all states related to the orders
    closeModalHandler = () => {
        this.props.onConfirmDelete(false);
        this.setState({show: false, deleted: null});
        this.props.onSetOrderId(0);
    }

    render () {
        let orderDeets = null;
        if (this.props.orderId && !this.props.confDelete) {
            orderDeets = <OrderDeets order={this.props.orderId}/>
        }

        let confirmDelete = null;
        if (this.props.confDelete) {
            confirmDelete = <ConfirmDelete deleteOrder={()=>this.deletOrderHandler()}/>
        }

        let orders = <Spinner/>;
        if (!this.props.loading) {
            orders = this.props.orders.map(order =>(
                <div key={(order.id * 7)}>
                    <Order 
                    key={order.id}
                    ingredients={order.order.ingredients}
                    price = {+order.order.price}
                    orderDetails={()=>this.orderDetailsHandler(order)}
                    orderDelete={()=>this.confirmDeleteHandler(order)}/>                        
                </div>
            ))
        };

        if (this.state.deleted) {
            window.alert('Order Deleted!!!!');
            this.closeModalHandler();        
            this.props.onFetchOrders(this.props.token);
        };  

        return (
            <div>
                <Modal show={this.state.show} modalClosed={this.closeModalHandler}>
                    {orderDeets}
                    {confirmDelete}
                </Modal>
                {orders}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        orderId: state.order.orderId,
        confDelete: state.order.confDelete
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
        onSetOrderId: (orderId) => dispatch(actions.setOrderId(orderId)),
        onConfirmDelete: (confDelete) => dispatch(actions.confirmDelete(confDelete))
    };
};

//export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
export default connect(mapStateToProps, mapDispatchToProps)(Orders);