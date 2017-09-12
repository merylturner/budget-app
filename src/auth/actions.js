import * as actions from './constants';
import authApi from '../services/authAPI';
import {getStoredToken} from '../services/request';

export function checkForToken() {
    return dispatch => {
        const token = getStoredToken();
        if (!token) return;

        dispatch({type: actions.GOT_TOKEN, payload: token});

        return authApi.verify()
            .then(() => authApi.getUser())
            .then(user => {
                dispatch({type: actions.FETCHED_USER, payload: user});
            })
            .catch(err => {
                dispatch({type: actions.AUTH_FAILED, payload: err});
            });
    };
}

export function signIn(credentials) {
    return dispatch => {
        authApi.signin(credentials)
            .then(({token}) => {
                dispatch({type: actions.GOT_TOKEN, payload: token});
            })
            .then(() => authApi.getUser())
            .then(user => {
                dispatch({type: actions.FETCHED_USER, payload: user});
            })
            .catch(err => {
                dispatch({type: actions.AUTH_FAILED, payload: err});
            });
    };
}

export function signUp(user) {
    return dispatch => {
        authApi.signup(user)
            .then(({token}) => {
                dispatch({type: actions.GOT_TOKEN, payload: token});
            })
            .then(() => authApi.getUser())
            .then(user => {
                dispatch({type: actions.FETCHED_USER, payload: user});
            })
            .catch(err => {
                dispatch({type: actions.AUTH_FAILED, payload: err});
            });
    };
}

export function signOut() {
    return {type: actions.LOGOUT};
}