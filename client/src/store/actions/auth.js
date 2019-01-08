import * as actionTypes from './actionTypes';
import axios from 'axios';

//all the actions available to the Auth container

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: username
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
    //localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: email,
            password: password
        }
        let url = '/users';
        if (!isSignUp) {
            url = '/sessions';
        }
        axios.post(url, authData)
            .then(response => {
                //const expirationDate = new Date (new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userId', response.data.username)
                //localStorage.setItem('expirationDate', expirationDate)
                dispatch(authSuccess(response.data.token, response.data.username));
                //dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }else{
            //const expirationDate = new Date(localStorage.getItem('expirationDate'));
            /*if (expirationDate <= new Date()) {
                dispatch(logout())
            }else {
                move stuff below in here once time is figured out
            }*/
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
            //dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()));
        }
    };
};