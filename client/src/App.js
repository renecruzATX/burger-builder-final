import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index'; 

const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth')
});

class App extends Component {
  //checks to see if user is already logged in
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    //renders routes that don't need authentication
    let routes = (
      <Switch>
        <Route path="/login" component={asyncAuth}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to="/"/>
      </Switch>
    );
    //if user is authenticated, renders all routes available
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout}/>
          <Route path="/orders" component={asyncOrders}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/login" component={asyncAuth}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to="/"/>
        </Switch>
      );
    };

    //Layout is the container that lay out the rest of the app
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

//grabbing state from the redux store for this container
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

//changes state if necessary to the Redux store
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

//connect function from Redux interferes with React Router so withRouter() allows it to work 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
