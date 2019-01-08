import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './Auth.module.css';
import * as actions from '../../store/actions/index';

//renders the login page
class Auth extends Component {
    state ={
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    };

    //checks to see if you're currently building a burger and not coming from the main page
    //directs you either to burger builder to create a burger
    //or to the checkout page if you already have built a burger and need to login to continue
    componentDidMount () {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    //check if inputs are valid
    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.minLength && isValid;
        }

        return isValid;
    }

    //changes inputs when typing
    inputChangeHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }

    //called when Submit button is clicked, passes on login credentials
    //changes state to let app know that user is logged in
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }
       
    render () {
        //gathers which input is needed from state above
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        //maps each imput and renders it in the proper order
        let form = formElementsArray.map(formElement => (
            <Input 
                key={formElement.id} 
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                valueType={formElement.id}                        
                changed={(event) => this.inputChangeHandler(event, formElement.id)} />
        ));
        
        //provides a message that lets the user know mode they are in
        let message = (!this.state.isSignUp) ? <h3>Welcome Back! Log in for Burger!</h3> : <h3>Sign Up to order a Delicious Burger!</h3>;
        
        //provides a spinner if the app is retrieving credentials
        if (this.props.loading) {
            form = <Spinner/>
        }

        //provides an error message during login if error occurs
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p className={styles.ErrorMessage}>{this.props.error}</p>
            )            
        }

        //redirects to the correct path after login
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }
            
        return (
            <div className={styles.Auth}>
                {authRedirect}
                {errorMessage}
                <div className={styles.wrapper}>
                    <button 
                        onClick={() => this.setState({isSignUp: false})}
                        className={styles.button}>Log In</button>
                    <button 
                        onClick={() => this.setState({isSignUp: true})}
                        className={styles.button}>Sign Up</button>
                </div>
                {message}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success" >SUBMIT</Button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);