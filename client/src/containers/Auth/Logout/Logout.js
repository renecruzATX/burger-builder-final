import React, {Component} from 'react';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

//renders when user is Logged in and logs out when clicked
class Logout extends Component {
    componentDidMount () {
        this.props.onLogout();
    }
    
    render () {
        return (
            <Redirect to='/'/>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);