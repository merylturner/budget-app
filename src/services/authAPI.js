import request from 'superagent';

const API_URL = '/api/auth';

export default {
    verify () {
        return request.get(`${API_URL}/verify`)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    },
    signin(credentials) {
        return request.post(`${API_URL}/signin`)
            .send(credentials)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    },
    signup(user) {
        return request.post(`${API_URL}/signup`)
            .send(user)
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    },
    getUser() {
        return request.get('/api/me')
            .then(
                res => res.body,
                err => { throw err.response.body; }
            );
    }
};