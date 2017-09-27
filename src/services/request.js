import store from '../index';
import superagent from 'superagent';

let token = '';

const storage = localStorage;

store.subscribe(() => {
    const {token: newToken} = store.getState().auth;
    if(newToken !== token) {
        token = newToken;
        token ? storage.token = token : storage.clear('token');
    }
});

export const getStoreToken = () => storage.token;

const wrap = cmd => cmd
    .set('Authorization', token)
    .then(r => r.body,
        ({response}) => {
            const {body, text} = response;
            const error = body ? body.message || body.error || body : text;
            throw error;
        }
    );